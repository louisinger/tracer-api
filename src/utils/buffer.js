import varuint from 'varuint-bitcoin'

/**
 * uint8array to hex
 * @param {Uint8Array!} buffer buffer to encode.
 */
export function buf2hex (buffer) {
  return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('')
}
