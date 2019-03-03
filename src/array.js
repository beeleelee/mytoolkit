import {
  typeOf,
  deepCopy,
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

/**
 * usage - react list render
 * 
 * @param {Array<Object>} collection - a list of plain object
 * @param {String} [prefix] - add prefix for each key
 * @returns {Array<Object>} - return a copy list of plain object who's 'key' property has been setted 
 */
export function addKey(collection, prefix = '') {
  return collection.map((item, key) => {
    if (typeOf(item.key) !== 'Undefined') {
      return item
    }
    let copy = deepCopy(item)

    copy.key = prefix + (typeOf(copy.id) !== 'Undefined' ? copy.id : key)
    return copy
  })
}