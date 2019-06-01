import {
  typeOf,
  deepCopy,
  assert,
  isArray,
  isObject,
  isFunction,
  isNumber,
  randInt,
  isString,
  deepEqual,
  isSet,
} from './base'

const defaultFilterFunc = item => isSet(item) && !isNaN(item) && item !== false

/**
 * 
 * @param {Array} array - a simple array
 * @param {Function} filterFunc - a function to check if item has value 
 * @returns {Array} - a new array without false value
 */
export function compact(list, filterFunc) {
  assert(isArray(list), `compact(list): expect list to be type of Array, but got ${typeOf(list)}`)
  if (!isFunction(filterFunc)) {
    filterFunc = defaultFilterFunc
  }

  return list.filter(filterFunc)
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
export function uniq(list, equalFunc) {
  assert(isArray(list), `uniq(list, equalFunc): expect list to be type of Array, but got ${typeOf(list)}`)

  if (isString(equalFunc)) {
    let prop = equalFunc
    equalFunc = (a, b) => a[prop] == b[prop]
  }
  if (!equalFunc) {
    equalFunc = deepEqual
  }
  let uniqList = []
  list.forEach(item => {
    if (uniqList.some(uniqItem => equalFunc(item, uniqItem))) {
      return
    }
    uniqList.push(item)
  })

  return uniqList
}

export function intersection(lista, listb, equalFunc) {
  assert(isArray(lista), `intersection(lista, listb, equalFunc): expect list to be type of Array, but got ${typeOf(lista)}`)
  assert(isArray(listb), `intersection(lista, listb, equalFunc): expect list to be type of Array, but got ${typeOf(listb)}`)

  if (isString(equalFunc)) {
    let prop = equalFunc
    equalFunc = (a, b) => a[prop] == b[prop]
  }
  if (!equalFunc) {
    equalFunc = deepEqual
  }
  let intersect = []
  lista.forEach(itema => {
    if (listb.some(itemb => equalFunc(itema, itemb))) {
      intersect.push(itema)
    }
  })

  return intersect
}

export function difference(lista, listb, equalFunc) {
  assert(isArray(lista), `difference(lista, listb, equalFunc): expect list to be type of Array, but got ${typeOf(lista)}`)
  assert(isArray(listb), `difference(lista, listb, equalFunc): expect list to be type of Array, but got ${typeOf(listb)}`)

  if (isString(equalFunc)) {
    let prop = equalFunc
    equalFunc = (a, b) => a[prop] == b[prop]
  }
  if (!equalFunc) {
    equalFunc = deepEqual
  }
  let r = []
  lista.forEach(itema => {
    if (!listb.some(itemb => equalFunc(itema, itemb))) {
      r.push(itema)
    }
  })

  return r
}

export function union(lista, listb, equalFunc) {
  assert(isArray(lista), `union(lista, listb, equalFunc): expect list to be type of Array, but got ${typeOf(lista)}`)
  assert(isArray(listb), `union(lista, listb, equalFunc): expect list to be type of Array, but got ${typeOf(listb)}`)

  return uniq(lista.concat(listb), equalFunc)
}

export function groupBy(list, groupFunc) {
  assert(isArray(list), `groupBy(list, groupFunc): expect list to be type of Array, but got ${typeOf(list)}`)

  if (isString(groupFunc)) {
    let prop = groupFunc
    groupFunc = item => item[prop]
  }

  assert(isFunction(groupFunc), `groupBy(list, groupFunc): expect groupFunc to be type of String or Function, but got ${typeOf(groupFunc)}`)

  let r = {}
  list.forEach(item => {
    let key = groupFunc(item)
    r[key] = r[key] || []
    r[key].push(item)
  })

  return r
}

export function bounds(list) {
  assert(isArray(list), `bounds(list): expect list to be type of Array, but got ${typeOf(list)}`)

  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity, x, y
  seek(list)

  function seek(l) {
    l.forEach((item, index) => {
      if (isString(item) || isNumber(item)) {
        index === 0 && (x0 = Math.min(x0, item))
        index === 1 && (y0 = Math.min(y0, item))
        index === 0 && (x1 = Math.max(x1, item))
        index === 1 && (y1 = Math.max(y1, item))
      }
      if (isObject(item)) {
        x = item['x'] || item['left'] || 0
        y = item['y'] || item['top'] || 0
        x0 = Math.min(x0, x)
        y0 = Math.min(y0, y)
        x1 = Math.max(x1, x)
        y1 = Math.max(y1, y)
      }
      if (isArray(item)) {
        seek(item)
      }
    })
  }
  return [[x0, y0], [x1, y1]]
}