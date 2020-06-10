import {
  bip39_mnemonic_to_seed,
  bip32_key_from_seed, BIP32_VER_TEST_PRIVATE
} from './Wally/wally'

import englishWords from './dictionaries/english.json'
import randomNumber from 'random-number-csprng'

/**
 * generate a random mnemonic and use it to build a seed, then compute the master wallet key from the seed.
 * @param {string!} passphrase optionnal passphrase.
 */
export async function generateRandomSeed (passphrase = '') {
  const randomNumbers = await Promise.all(new Array(24).fill(randomNumber(0, 2048)))
  const mnemonic = randomNumbers.map(i => englishWords[i]).join(' ')
  const seed = await bip39_mnemonic_to_seed(mnemonic, passphrase)
  const masterPrivateKey = await bip32_key_from_seed(seed, BIP32_VER_TEST_PRIVATE, 0)
  return { seed, mnemonic, masterPrivateKey }
}

export function mnemonicFromSeed (seed) {

}

export function seedFromMnemonic () {

}

export function publicKeyFromPrivateKey () {

}
