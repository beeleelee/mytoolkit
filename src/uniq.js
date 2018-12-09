import typeOf from './typeOf'

/**
 * 
 * @param {Array} array - a simple array
 * @returns {Array} - return a new array without doubled values
 */
export function uniq(array) {
  if (typeOf(array) !== 'Array') {
    throw new TypeError(`unexpected type of ${typeOf(array)}, expected Array}`)
  }

  return [...new Set(array)]
}

export default uniq 