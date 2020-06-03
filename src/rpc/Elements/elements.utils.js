/**
 * Create issuance object.
 * @param {Number!} assetAmount
 * @param {string!} assetAddress
 * @param {Number!} tokenAmount
 * @param {string!} tokenAddress
 * @param {boolean!} blind
 * @param {Number!} contractHash
 */
export function issuance (assetAmount, assetAddress, tokenAmount, tokenAddress, blind = true, contractHash = 0x00000000000000000000000000000000) {
  const issuanceObject = {
    asset_amount: assetAmount,
    asset_address: assetAddress,
    token_amount: tokenAmount,
    token_address: tokenAddress,
    blind,
    contract_hash: contractHash
  }

  return issuanceObject
}
