import {
  typeOf,
  deepCopy,
  assert,
  isArray,
} from './base'
import {
  randInt
} from './utils'

/**
 * 
 * @param {Array} array - a simple array
 * @returns {Array} - a new array without false value
 */
export function compact(list) {
  assert(isArray(list), `compact(list): expect list to be type of Array, but got ${typeOf(list)}`)
  return list.filter(item => item ? true : false)
}

/**
 * usage - react list render
 * 
 * @param {Array<Object>} collection - a list of plain object
 * @param {String} [prefix] - add prefix for each key
 * @returns {Array<Object>} - return a copy list of plain object who's 'key' property has been setted 
 */
export function addKey(list, propName, prefix = '') {
  assert(isArray(list), `addkey(list): expect list to be type of Array, but got ${typeOf(list)}`)
  return list.map((item, key) => {
    if (typeOf(item.key) !== 'Undefined') {
      return item
    }
    let copy = deepCopy(item)
    propName = propName || 'id'
    copy.key = prefix + (typeOf(copy[propName]) !== 'Undefined' ? copy[propName] : key)
    return copy
  })
}

export function head(list, size = 1) {
  assert(isArray(list), `head(list, size): expect list to be type of Array, but got ${typeOf(list)}`)
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
  assert(isArray(list), `tail(list, size): expect list to be type of Array, but got ${typeOf(list)}`)
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
  assert(isArray(list), `middle(list): expect list to be type of Array, but got ${typeOf(list)}`)
  const len = list.length

  return list[Math.floor((len + 1) / 2) - 1]
}

/**
 * 
 * @param {Array} list - a simple array
 * @returns {Int} - the index of the middle item in the list 
 */
export function midIndex(list) {
  assert(isArray(list), `midIndex(list): expect list to be type of Array, but got ${typeOf(list)}`)
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
  assert(isArray(list), `quickSort(list, func): expect list to be type of Array, but got ${typeOf(list)}`)
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
  assert(isArray(list), `nlargest(list, num): expect list to be type of Array, but got ${typeOf(list)}`)
  return quickSort(list, (a, b) => a < b).slice(0, num)
}

/**
 * 
 * @param {Array} list - a simple array
 * @param {Number} num - the size of the smallest list
 * @returns {Array} - the smallest list
 */
export function nsmallest(list, num = 1) {
  assert(isArray(list), `nsmallest(list, num): expect list to be type of Array, but got ${typeOf(list)}`)
  return quickSort(list).slice(0, num)
}

/**
 * 
 * @param {Array} list - a simple array
 * @returns {Array} - return a reordered list
 */
export function shuffle(list) {
  assert(isArray(list), `shuffle(list): expect list to be type of Array, but got ${typeOf(list)}`)
  const len = list.length
  const r = [...list]
  let randIdx, midValue
  for (let i = 0; i < len - 1; i++) {
    randIdx = randInt(i + 1, len)
    midValue = r[i]
    r[i] = r[randIdx]
    r[randIdx] = midValue
  }
  return r
}

/**
 * 
 * @param {Array} array - a simple array
 * @returns {Array} - return a new array without doubled values
 */
export function uniq(list) {
  assert(isArray(list), `uniq(list): expect list to be type of Array, but got ${typeOf(list)}`)

  return [...new Set(list)]
}