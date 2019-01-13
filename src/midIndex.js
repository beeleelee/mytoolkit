import typeOf from './typeOf'

/**
 * 
 * @param {Array} list - a simple array
 * @returns {Int} - the index of the middle item in the list 
 */
export function midIndex(list) {
  if (typeOf(list) !== 'Array') {
    throw new TypeError('expected param to be an Array! but got a type of ' + typeOf(list))
  }
  const len = list.length

  return Math.floor((len + 1) / 2) - 1
}

export default midIndex