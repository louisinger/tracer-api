import {
  bip39_mnemonic_to_seed,
  bip32_key_from_seed, BIP32_VER_TEST_PRIVATE, bip32_pubkey_from_parent,
  BIP32_FLAG_KEY_PRIVATE,
  WALLY_ADDRESS_TYPE_P2PKH, WALLY_ADDRESS_VERSION_P2PKH_LIQUID_REGTEST,
  WALLY_CA_PREFIX_LIQUID_REGTEST,
  OP_DUP, OP_EQUALVERIFY, OP_HASH160, OP_CHECKSIG,
  wally_hash160,
  wally_asset_blinding_key_from_seed,
  wally_asset_blinding_key_to_ec_private_key,
  wally_ec_public_key_from_private_key,
  wally_confidential_addr_from_addr
} from './Wally/wally'

import { encode, decode } from 'bs58check'

import englishWords from './dictionaries/english.json'
import randomNumber from 'random-number-csprng'

// depends of the network !!
const ADDRESS_VERSION = WALLY_ADDRESS_VERSION_P2PKH_LIQUID_REGTEST
const CA_PREFIX = WALLY_CA_PREFIX_LIQUID_REGTEST

// util function
async function pubKeyToAddr (pub, flag, version) {
  const hash160pubkey = await wally_hash160(pub)
  const bytes = Uint8Array.from([version, ...hash160pubkey])
  return encode(bytes)
}

// util function
function scriptPubKeyFromAddr (addr) {
  const addrHash = decode(addr).slice(1)
  const script = Uint8Array.from([OP_DUP, OP_HASH160, ...addrHash, OP_EQUALVERIFY, OP_CHECKSIG])
  return script
}

/**
 * generate a random mnemonic and use it to build a seed, then compute the master wallet key from the seed.
 * @param {string!} passphrase optional passphrase.
 */
export async function generateNewSeed (passphrase = '') {
  const randomNumbers = new Array(24)
  for (let i = 0; i < 24; i++) {
    randomNumbers[i] = await randomNumber(0, 2048)
  }
  const mnemonic = randomNumbers.map(i => englishWords[i]).join(' ')
  const seed = await bip39_mnemonic_to_seed(mnemonic, passphrase)
  return { seed, mnemonic }
}

/**
 * Generate master keys from the seed.
 * @param {Uint8Array!} seed the wallet's seed.
 */
export async function generateMasterKeys (seed) {
  const masterPrivateKey = await bip32_key_from_seed(seed, BIP32_VER_TEST_PRIVATE, 0)
  const masterBlindingKey = await wally_asset_blinding_key_from_seed(seed)
  return { masterPrivateKey, masterBlindingKey }
}

/**
 * Generate a new confidential address.
 * @param {Uint8Array!} masterPrivateKey the master private key.
 * @param {Uint8Array!} masterBlindingKey the master blinding key.
 * @param {number!} index the index of the address to generate.
 */
export async function generateConfidentialAddress (masterPrivateKey, masterBlindingKey, index) {
  const addr = await generateAddress(masterPrivateKey, index)
  const scriptPubKey = scriptPubKeyFromAddr(addr)
  const privateBlindingKey = await wally_asset_blinding_key_to_ec_private_key(masterBlindingKey, scriptPubKey)
  const publicBlindingKey = await wally_ec_public_key_from_private_key(privateBlindingKey)
  return wally_confidential_addr_from_addr(addr, CA_PREFIX, publicBlindingKey)
}

/**
 * Generate a new pubkey and then a new address from the pubkey.
 * @param {Uint8Array!} masterPrivateKey the wallet's master blinding to derive.
 * @param {number} index the index of the address to generate.
 */
export async function generateAddress (masterPrivateKey, index) {
  // pub key
  const walletDerivedKey = await bip32_pubkey_from_parent(masterPrivateKey, 2, BIP32_FLAG_KEY_PRIVATE)
  const addr = await pubKeyToAddr(walletDerivedKey, WALLY_ADDRESS_TYPE_P2PKH, ADDRESS_VERSION)
  return addr
}
