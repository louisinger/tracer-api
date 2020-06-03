# Tracer API

## Installation

```bash
git clone https://github.com/louisinger/tracer-api.git
cd tracer-api
npm install
npm start
```

## Documentation

### HTTP clients for JSON RPC

Inside the folder `src/rpc`, you can find all the code of the httpClients. `BitcoinClient` extends `HttpClient` and `ElementsClient` extends `BitcoinClient`.

example:

```javascript
import HttpClient from './rpc/HttpClient'
import ElementsClient from './rpc/ElementsClient'

const NODE_URL = 'localhost'
const NODE_PORT = 18885

const client = new HttpClient(NODE_URL, NODE_PORT, 'user2', 'password2')
const elementsClient = new ElementsClient(NODE_URL, NODE_PORT, 'user2', 'password2')

client.request('getwalletinfo')
  .then(r => console.log(r))
  .catch(console.error)
elementsClient.getWalletInfo().then(console.log).catch(console.error)

elementsClient.issueAsset(10, 2).then(console.log).catch(console.error)
```
