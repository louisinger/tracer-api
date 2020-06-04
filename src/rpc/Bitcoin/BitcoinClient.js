import HttpClient from '../HttpClient'

export default class BitcoinClient extends HttpClient {
  async getWalletInfo () {
    return this.request('getwalletinfo')
  }
}
