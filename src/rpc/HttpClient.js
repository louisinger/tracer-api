import phin from 'phin'

export default class HttpClient {
  /**
   * Configure an httpClient for a Bitcoin-like node exposing a JSON RPC API.
   * @param {String!} hostname the node's hostname to request.
   * @param {Number!} port the node's port to request.
   * @param {String!} rpcUsername the RPC username.
   * @param {String!} rpcPassword the RPC password.
   */
  constructor (hostname, port, rpcUsername, rpcPassword) {
    this.endpoint = `http://${hostname}:${port}`
    this.staticOptions = {
      url: this.endpoint,
      method: 'POST',
      parse: 'json',
      headers: {
        'content-type': 'text/plain'
      },
      core: {
        auth: `${rpcUsername}:${rpcPassword}`
      }
    }
  }

  /**
   * Returns the request options object for the RPC method given as parameter (apply to the params array).
   * @param {String!} method the RPC's method name.
   * @param {Array!} params the list of params according to the RPC method references.
   */
  requestOptions (method, params) {
    return Object.assign({
      data: {
        jsonrpc: '2.0',
        id: 'rpcrequest',
        method,
        params
      }
    }, this.staticOptions)
  }

  /**
   * Request the RPC API of the node.
   * @param {String!} method the RPC's method name.
   * @param {Array!} params the list of params according to the RPC method references.
   */
  async request (method, params = []) {
    return phin(this.requestOptions(method, params))
      .then(result => result.body)
  }
}
