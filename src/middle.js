import typeOf from './typeOf'
/**
 * 
 * @param {Array} list - a simple array
 * @return {Any} - any type in the list
 */
export function middle(list) {
  if (typeOf(list) !== 'Array') {
    throw new TypeError('expected param to be an Array! but got a type of ' + typeOf(list))
  }
  const len = list.length

  return list[Math.floor((len + 1) / 2) - 1]
}

export default middle