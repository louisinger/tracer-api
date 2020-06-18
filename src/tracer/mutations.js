import { CLI, ASSET_HEX, TOKEN_HEX } from '../conf'
import { parseHexString } from '../utils/buffer'
import { signp2pkh } from '../rpc/Elements/elements.utils'

/**
 * @param {string!} producerCAddr the producer's confidential address.
 * @param {string!} assetMerkleRoot the asset's Merkle root to create.
 */
export async function create (producerCAddr, assetMerkleRoot) {
  await CLI.importAddress(producerCAddr)
  await CLI.sendToAddress(producerCAddr, 1, '', '', false, false, 5, 'UNSET', TOKEN_HEX)
  await CLI.generateToAddress(6, producerCAddr)
  const utxos = await CLI.listUnspent(1, 99999, [producerCAddr], true, TOKEN_HEX)
  const entropy = (await CLI.listIssuances(ASSET_HEX))[0].entropy
  const inputTxin = utxos[0].txid
  const inputVout = utxos[0].vout
  const assetBlinder = utxos[0].assetblinder
  const tx = await CLI.createRawTransaction([{ txid: inputTxin, vout: inputVout }], { data: assetMerkleRoot, [producerCAddr]: 1 }, 0, false, { [producerCAddr]: TOKEN_HEX })
  const reissueTx = await CLI.rawReIssueAsset(tx, [{
    asset_amount: 0.00000001,
    asset_address: producerCAddr,
    input_index: 0,
    asset_blinder: assetBlinder,
    entropy
  }])
  const blindTx = await CLI.blindRawTransaction(reissueTx.hex)
  const decoded = await CLI.decodeRawTransaction(blindTx)
  console.log('decoded = ', decoded)
  console.log('sighashall = ', await signp2pkh(decoded, 0, null))
  const scriptSigs = decoded.vin.map(i => i.scriptSig)
  console.log(scriptSigs)
}

/**
 * Transfer an assetMerkleRoot from the sender to the receiver.
 * @param {string!} senderCAddr the sender's address.
 * @param {string!} receiverCAddr the receiver's address.
 * @param {string!} assetMerkleRoot the asset Merkle root.
 */
export function transfer (senderCAddr, receiverCAddr, assetMerkleRoot) {

}
