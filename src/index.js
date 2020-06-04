import HttpClient from './rpc/HttpClient'
import ElementsClient from './rpc/Elements/ElementsClient'

const NODE_URL = 'localhost'
const NODE_PORT = 18885

const client = new HttpClient(NODE_URL, NODE_PORT, 'user2', 'password2')
const elementsClient = new ElementsClient(NODE_URL, NODE_PORT, 'user2', 'password2')

// client.request('getwalletinfo')
//   .then(r => console.log(r))
//   .catch(console.error)
// elementsClient.getWalletInfo().then(console.log).catch(console.error)

// elementsClient.issueAsset(10, 2).then(console.log).catch(console.error)

async function main () {
  // const addr = await elementsClient.getNewAddress()
  // console.log(addr)
  // const blocks = await elementsClient.generateToAddress(10, addr)
  // console.log(blocks)
  // const issue = await elementsClient.issueAsset(10, 0, true)
  // console.log(issue)
  // const issuances = await elementsClient.listIssuances()
  // console.log(issuances)
  const rawTx = await elementsClient.createRawTransaction([], [{ data: '00' }])
  const tx = await elementsClient.decodeRawTransaction(rawTx)
  console.log(tx.vout[0].scriptPubKey)
}

main()
