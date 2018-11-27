import { _padStart } from './internal/_pad'
/**
 * 
 * @param {Number|String} num - the number going to be padded
 * @param {NUmber} [size] - the length of the return string after padding
 * @returns {String} - the padded string
 */
export function padZero(num, size = 2) {
  return _padStart(num, size, 0)
}

export default padZero