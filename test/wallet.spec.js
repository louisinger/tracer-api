import { describe, it, before } from 'mocha'
import { expect } from 'chai'
import { generateNewSeed, generateMasterKeys, generateAddress, generateConfidentialAddress } from '../src/wallet/wallet.api'
import { bip39_mnemonic_to_seed } from '../src/wallet/Wally/wally'

describe('#generateRandomSeed()', function () {
  let resObj

  before(async () => {
    resObj = await generateNewSeed('passwordsecret')
  })

  it('should generate a random seed & an associated mnemonic', function () {
    expect(resObj).to.have.property('seed')
    expect(resObj).to.have.property('mnemonic')
  })

  it('should protect the mnemonic with the passphrase using to generate it', async function () {
    const seedWithPassphrase = await bip39_mnemonic_to_seed(resObj.mnemonic, 'passwordsecret')
    expect(seedWithPassphrase).to.eql(resObj.seed)
  })

  it('should not recover the seed using only the mnemonic (without passphrase)', async function () {
    const seedWithoutPassphrase = await bip39_mnemonic_to_seed(resObj.mnemonic, '')
    expect(seedWithoutPassphrase).to.not.eql(resObj.seed)
  })
})

describe('#generateMasterKeys()', function () {
  let keys

  before(async () => {
    const { seed } = await generateNewSeed()
    keys = await generateMasterKeys(seed)
  })

  it('should generate a masterPrivateKey and a masterBlindingKey', function () {
    expect(keys).to.have.property('masterPrivateKey')
    expect(keys).to.have.property('masterBlindingKey')
  })
})

describe('#generateAddress()', function () {
  let addr
  let seed

  before(async () => {
    seed = (await generateNewSeed()).seed
    const { masterPrivateKey } = await generateMasterKeys(seed)
    addr = await generateAddress(masterPrivateKey, 0)
  })

  it('should generate an encoded address', function () {
    expect(addr).to.be.a('string')
  })

  it('should be deterministic', async function () {
    const { masterPrivateKey } = await generateMasterKeys(seed)
    const otherAddr = await generateAddress(masterPrivateKey, 0)
    expect(addr).to.be.eql(otherAddr)
  })
})

describe('#generateConfidentialAddress()', function () {
  let confAddr
  let seed

  before(async () => {
    seed = (await generateNewSeed()).seed
    const { masterPrivateKey, masterBlindingKey } = await generateMasterKeys(seed)
    confAddr = await generateConfidentialAddress(masterPrivateKey, masterBlindingKey, 0)
  })

  it('should generate an encoded confidential address', function () {
    expect(confAddr).to.be.a('string')
  })

  it('should be deterministic', async function () {
    const { masterPrivateKey, masterBlindingKey } = await generateMasterKeys(seed)
    const otherConfAddr = await generateConfidentialAddress(masterPrivateKey, masterBlindingKey, 0)
    expect(confAddr).to.be.eql(otherConfAddr)
  })
})
