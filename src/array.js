import {
  typeOf
} from './base'

/**
 * 
 * @param {Array} array - a simple array
 * @returns {Array} - a new array without false value
 */
export function compact(array) {
  if (typeOf(array) !== 'Array') {
    throw new TypeError(`unexpected type of ${typeOf(array)}, expected Array}`)
  }
  return array.filter(item => item ? true : false)
}

