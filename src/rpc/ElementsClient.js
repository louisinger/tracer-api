import BitcoinClient from './BitcoinClient'

export default class ElementsClient extends BitcoinClient {
  /**
   * https://elementsproject.org/en/doc/0.18.1.7/rpc/wallet/issueasset/
   * @param {(Number|string)!} assetAmount Amount of reissuance tokens to generate.
   * @param {(Number|string)!} tokenAmount Amount of asset to generate. Note that the amount is BTC-like, with 8 decimal places.
   * @param {boolean} [blind=true] blinded tranaction or not.
   */
  async issueAsset (assetAmount, tokenAmount, blind = true) {
    return this.request('issueasset', [assetAmount, tokenAmount, blind])
  }

  /**
   * https://elementsproject.org/en/doc/0.18.1.7/rpc/wallet/getnewaddress/
   * @param {string!} [label=''] the address label.
   * @param {string!} [addressType='legacy'] the address type.
   */
  async getNewAddress (label, addressType) {
    return this.request('getnewaddress', [label, addressType])
  }
}
