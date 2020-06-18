import { create } from './tracer/mutations'
import { generateNewSeed, generateMasterKeys, generateConfidentialAddress } from './wallet/wallet.api'
import { buf2hex } from './utils/buffer'

const oneSat = '0.00000001'

async function main () {
  const { seed, mnemonic } = (await generateNewSeed())
  const { masterPrivateKey, masterBlindingKey } = await generateMasterKeys(seed)
  const addr = await generateConfidentialAddress(masterPrivateKey, masterBlindingKey, 0)

  console.log('WALLET: ----------------------------------')
  console.log('seed = ', buf2hex(seed))
  console.log('mnemonic = ', mnemonic)
  console.log('masterPrivateKey = ', buf2hex(masterPrivateKey))
  console.log('masterBlindingKey = ', buf2hex(masterBlindingKey))
  console.log('addr = ', addr)
  console.log('------------------------------------------')

  create(addr, '1170bda35de764c0713f31c1aa8256bcd223441f7755f3c838688ed7c7a81f2d')
}

main()
