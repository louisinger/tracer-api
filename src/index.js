import HttpClient from './rpc/HttpClient'
import ElementsClient from './rpc/ElementsClient'

const NODE_URL = 'localhost'
const NODE_PORT = 18885

const client = new HttpClient(NODE_URL, NODE_PORT, 'user2', 'password2')
const elementsClient = new ElementsClient(NODE_URL, NODE_PORT, 'user2', 'password2')

// client.request('getwalletinfo')
//   .then(r => console.log(r))
//   .catch(console.error)
// elementsClient.getWalletInfo().then(console.log).catch(console.error)

elementsClient.issueAsset(10, 2).then(console.log).catch(console.error)
