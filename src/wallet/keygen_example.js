import { OP_DUP, WALLY_CA_PREFIX_LIQUID_REGTEST, wally_confidential_addr_from_addr, OP_HASH160, OP_EQUALVERIFY, OP_CHECKSIG, wally_ec_public_key_from_private_key, wally_asset_blinding_key_to_ec_private_key, wally_asset_blinding_key_from_seed, WALLY_ADDRESS_VERSION_P2PKH_LIQUID_REGTEST, WALLY_ADDRESS_TYPE_P2PKH, wally_hash160, BIP32_FLAG_KEY_PRIVATE, BASE58_FLAG_CHECKSUM, BIP32_VER_TEST_PRIVATE, bip39_mnemonic_to_seed, bip32_key_from_seed, wally_base58_from_bytes, bip32_pubkey_from_parent, bip32_privkey_from_parent } from './Wally/wally'
import { encode, decode } from 'bs58check'

import englishWords from './english.json'

let mnemonic = 'fork walnut dwarf salmon life vacuum repeat tent magnet library phone auction myth bird install'
mnemonic = mnemonic + englishWords[291] + englishWords[983] + englishWords[221] + englishWords[902] + englishWords[1111]

async function pubKeyToAddr (pub, flag, version) {
  const hash160pubkey = await wally_hash160(pub)
  const bytes = Uint8Array.from([version, ...hash160pubkey])
  return encode(bytes)
}

function scriptPubKeyFromAddr (addr) {
  const addrHash = decode(addr).slice(1)
  const script = Uint8Array.from([OP_DUP, OP_HASH160, ...addrHash, OP_EQUALVERIFY, OP_CHECKSIG])
  return script
}

async function main () {
  const seed = await bip39_mnemonic_to_seed(mnemonic, '')
  const walletMasterKey = await bip32_key_from_seed(seed, BIP32_VER_TEST_PRIVATE, 0)

  // pub key
  const walletDerivedKey = await bip32_pubkey_from_parent(walletMasterKey, 2, BIP32_FLAG_KEY_PRIVATE)
  console.log('pubkey= ', walletDerivedKey)
  const pubkey = await wally_base58_from_bytes(walletDerivedKey, BASE58_FLAG_CHECKSUM)

  console.log(pubkey)

  const addr = await pubKeyToAddr(walletDerivedKey, WALLY_ADDRESS_TYPE_P2PKH, WALLY_ADDRESS_VERSION_P2PKH_LIQUID_REGTEST)
  console.log('addr: ', decode(addr))
  console.log('addr (bytes): ', addr)
  const addrHash = decode(addr).slice(1)
  console.log('addr hash: ', addrHash)

  const masterBlindingKey = await wally_asset_blinding_key_from_seed(seed)
  const scriptPubkey = scriptPubKeyFromAddr(addr)

  console.log('master blinding key: ', masterBlindingKey)
  console.log('script pub key: ', scriptPubkey)

  const privateBlindingKey = await wally_asset_blinding_key_to_ec_private_key(masterBlindingKey, scriptPubkey)
  console.log('private blinding key: ', masterBlindingKey)

  const publicBlindingKey = await wally_ec_public_key_from_private_key(privateBlindingKey)
  console.log('public blinding key: ', publicBlindingKey)

  const confidentialAddress = await wally_confidential_addr_from_addr(addr, WALLY_CA_PREFIX_LIQUID_REGTEST, publicBlindingKey)
  console.log('confidential address: ', confidentialAddress)
}

main()
