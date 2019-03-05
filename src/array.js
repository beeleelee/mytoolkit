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

export function head(list, size = 1) {
  if (typeOf(list) !== 'Array') {
    throw new TypeError('expected param to be an Array! but got a type of ' + typeOf(list))
  }
  const realSize = Math.min(size, list.length)
  if (realSize === 0) return ''
  if (realSize === 1) return list[0]

  return list.slice(0, realSize)
}

/**
 * 
 * @param {Array} list - a simple array
 * @param {Number} size - the size of the trancated list
 * @return {Any | Array} - the trancated list or the last item 
 */
export function tail(list, size = 1) {
  if (typeOf(list) !== 'Array') {
    throw new TypeError('expected param to be an Array! but got a type of ' + typeOf(list))
  }
  const realSize = Math.min(size, list.length)
  if (realSize === 0) return ''
  if (realSize === 1) return list.slice(-1)[0]

  return list.slice(-realSize)
}

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

/**
 * 
 * @param {Array} list - a simple array
 * @param {Function} func - a compare function
 * @returns {Array} - a sorted list
 */
export function quickSort(list, func = compare) {
  if (typeOf(list) !== 'Array') {
    throw new TypeError('expected param to be an Array! but got a type of ' + typeOf(list))
  }
  let listLen = list.length
  if (listLen < 2) return [...list]

  let leftSide = []
  let rightSide = []
  let headItem = head(list)
  for (let i = 1; i < listLen; i++) {
    let item = list[i]
    if (func(item, headItem)) {
      rightSide.push(item)
    } else {
      leftSide.push(item)
    }
  }
  return [...quickSort(leftSide, func), headItem, ...quickSort(rightSide, func)]
}

function compare(a, b) {
  return a > b
}

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