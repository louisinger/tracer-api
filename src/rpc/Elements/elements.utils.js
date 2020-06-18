import { txToBuffer } from '../../utils/buffer'
import { wally_sha256 } from '../../wallet/Wally/wally'

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

export async function signp2pkh (tx, vindex, privKey, hashType = 0x01) {
  // zero out scripts of other inputs
  for (let i = 0; i < tx.vin.length; i++) {
    if (i === vindex) continue
    tx.vin[i].script = Buffer.alloc(0)
  }

  // write to the buffer
  let buffer = txToBuffer(tx)

  // extend and append hash type
  buffer = Buffer.alloc(buffer.length + 4, buffer)

  // append the hash type
  buffer.writeInt32LE(hashType, buffer.length - 4)

  // double-sha256
  const hash = await wally_sha256(await wally_sha256(buffer))

  // // sign input
  // const sig = sign(hash, privKey)

  // // encode
  // return encodeSig(sig.signature, hashType)
  return hash
}
