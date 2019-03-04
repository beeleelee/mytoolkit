import {
  typeOf
} from './base'

/**
 * 
 * @param {String|Number} num -  1000 | 10000000.001
 * @returns {String} 1,000 | 10,000,000.001
 */
export function addComma(num) {
  let numberToAddComma = parseFloat(num)
  if (typeOf(numberToAddComma) !== 'Number') {
    throw new TypeError('addComma need number form its parameter!')
  }
  let sign = numberToAddComma < 0 ? '-' : ''
  let base = parseInt(Math.abs(numberToAddComma)) + ''
  let decimal = (numberToAddComma + '').replace(/-?\d*/, '')
  let mod = base.length > 3 ? base.length % 3 : 0
  return sign + (mod ? base.substr(0, mod) + ',' : '') + base.substr(mod).replace(/(\d{3})(?=\d)/g, '$1,') + decimal
}

export function angle2deg(angle) {
  return angle * 180 / Math.PI
}

export function deg2angle(deg) {
  return deg * Math.PI / 180
}

/**
 * @returns {Number} - miniseconds since 00:00:00 UTC on January 1, 1970
 */

export const currentTime = () => +new Date

/**
 * @desc - like currentTime but its seconds not miniseconds
 * @returns - seconds since 00:00:00 UTC on January 1, 1970
 */
export function timestamp() {
  return Math.round(currentTime() / 1000)
}
