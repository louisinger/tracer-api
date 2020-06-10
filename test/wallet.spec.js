import { describe, it } from 'mocha'
import { expect } from 'chai'
import { generateRandomSeed } from '../src/wallet/wallet.api'
import { bip39_mnemonic_to_seed } from '../src/wallet/Wally/wally'

describe('#generateRandomSeed()', function () {
  it('should generate a random seed, an associated mnemonic and a masterPrivateKey', async function () {
    const { seed, mnemonic, masterPrivateKey } = await generateRandomSeed()
    expect(seed).equals(await bip39_mnemonic_to_seed(mnemonic, ''))
  })
})

describe('#mnemonicFromPrivateKey()', function () {

})

describe('#privateKeyFromMnemonic()', function () {
  it('should recover private key from a list of 24 english words', function () {

  })
})

describe('#publicKeyFromPrivateKey()', function () {
  it('should generates a valid public key from a private one', function () {

  })
})
