import BitcoinClient from '../Bitcoin/BitcoinClient'

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
   * https://elementsproject.org/en/doc/0.18.1.7/rpc/rawtransactions/rawissueasset/
   * @param {string!} transactionHex transactionHex.
   * @param {Object[]} issuances issuances to add to the transaction.
   */
  async rawIssueAsset (transactionHex, issuances) {
    return this.request('rawissueasset', [transactionHex, issuances])
  }

  /**
   * https://elementsproject.org/en/doc/0.18.1.7/rpc/wallet/getnewaddress/
   * @param {string!} [label=''] the address label.
   * @param {string!} [addressType='legacy'] the address type.
   */
  async getNewAddress (label = null, addressType = null) {
    return this.request('getnewaddress', [label, addressType])
  }

  /**
   * https://elementsproject.org/en/doc/0.18.1.7/rpc/generating/generatetoaddress/
   * @param {Number!} nblock number of blocks to generate.
   * @param {String!} address the address that will receive the collected funds.
   * @param {Number!} maxtries maxtries number.
   */
  async generateToAddress (nblock, address, maxtries = 1000000) {
    return this.request('generatetoaddress', [nblock, address, maxtries])
  }

  /**
   * https://elementsproject.org/en/doc/0.18.1.7/rpc/wallet/listissuances/
   * @param {string!} asset asset hex or associated asset label.
   */
  async listIssuances (asset = null) {
    return this.request('listissuances', [asset])
  }

  /**
   * https://elementsproject.org/en/doc/0.18.1.7/rpc/wallet/sendtoaddress/
   * @param {string!} address the addres of the receiver.
   * @param {number! | string!} amount the asset's amount to send.
   * @param {string} comment
   * @param {string} commentTo
   * @param {boolean} substractFeeFromAmount
   * @param {boolean} replaceable
   * @param {number} confTarget
   * @param {string} estimateMode
   * @param {string} assetLabel
   * @param {boolean} ignoreblindfail
   */
  async sendToAddress (address, amount, comment = '', commentTo = '', substractFeeFromAmount = false, replaceable, confTarget, estimateMode = 'UNSET', assetLabel, ignoreblindfail = true) {
    return this.request('sendtoaddress', [address, amount, comment, commentTo, substractFeeFromAmount, replaceable, confTarget, estimateMode, assetLabel, ignoreblindfail])
  }

  /**
   * https://elementsproject.org/en/doc/0.18.1.7/rpc/rawtransactions/createrawtransaction/
   * @param {{txid: string!, vout: number!, sequence: number}[]} inputs the inputs array.
   * @param {Object[]!} outputs the outputs array.
   * @param {number} locktime
   * @param {boolean} replaceable
   */
  async createRawTransaction (inputs, outputs, locktime = 0, replaceable = false) {
    return this.request('createrawtransaction', [inputs, outputs, locktime, replaceable])
  }

  /**
   * Decode an hex-encoded transaction.
   * https://elementsproject.org/en/doc/0.18.1.7/rpc/rawtransactions/decoderawtransaction/
   * @param {string!} hexstring the encoded transaction.
   */
  async decodeRawTransaction (hexstring) {
    return this.request('decoderawtransaction', [hexstring])
  }

  /**
   * https://elementsproject.org/en/doc/0.18.1.7/rpc/rawtransactions/fundrawtransaction/
   * @param {string!} hexstring the encoded transaction to fund.
   * @param {Object} options the options see (RPC reference link).
   */
  async fundRawTransaction (hexstring, options) {
    return this.request('fundrawtransaction', [hexstring, options])
  }
}
