import typeOf from './typeOf'
import quickSort from './quickSort'

/**
 * 
 * @param {Array} list - a simple array
 * @param {Number} num - the size of the smallest list
 * @returns {Array} - the smallest list
 */
export function nsmallest(list, num = 1) {
  if (typeOf(list) !== 'Array') {
    throw new TypeError(`expect param to be type of Array, but got ${typeOf(list)}`)
  }

  return quickSort(list).slice(0, num)
}

export default nsmallest