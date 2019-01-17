import typeOf from './typeOf'
import quickSort from './quickSort'

/**
 * 
 * @param {Array} list - a simple array
 * @param {Number} num - the size of the largest list
 * @return {Array} - the larget list
 */
export function nlargest(list, num = 1) {
  if (typeOf(list) !== 'Array') {
    throw new TypeError(`expect param to be type of Array, but got ${typeOf(list)}`)
  }

  return quickSort(list, (a, b) => a < b).slice(0, num)
}

export default nlargest