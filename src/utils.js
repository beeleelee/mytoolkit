import {
  typeOf,
  isSet,
  isNumber,
  isString,
  assert,
  isArray,
  isObject,
  randInt,
} from './base'
import { _dateConvert } from './internal/_date'
import {
  shuffle,
} from './array'

/**
 * 
 * @param {String|Number} num -  1000 | 10000000.001
 * @returns {String} 1,000 | 10,000,000.001
 */
export function addComma(num) {
  let numberToAddComma = parseFloat(num)
  if (isNaN(numberToAddComma)) {
    return num
  }

  let sign = numberToAddComma < 0 ? '-' : ''
  let base = parseInt(Math.abs(numberToAddComma)) + ''
  let decimal = (numberToAddComma + '').replace(/-?\d*/, '')
  let mod = base.length > 3 ? base.length % 3 : 0
  return sign + (mod ? base.substr(0, mod) + ',' : '') + base.substr(mod).replace(/(\d{3})(?=\d)/g, '$1,') + decimal
}

export function angle2deg(angle) {
  return angle * 180 / Math.PI
}

export function deg2angle(deg) {
  return deg * Math.PI / 180
}

/**
 * @returns {Number} - miniseconds since 00:00:00 UTC on January 1, 1970
 */

export const currentTime = () => +new Date

/**
 * @desc - like currentTime but its seconds not miniseconds
 * @returns - seconds since 00:00:00 UTC on January 1, 1970
 */
export function timestamp() {
  return Math.round(currentTime() / 1000)
}

/**
 * 
 * @param {Number} [startValue] - start value for generating ids
 * @returns {Function} - id will plus 1 at each call of the func
 * 
 */
export function IDFactory(startValue = 1) {
  return function () {
    return startValue++
  }
}

export function parseQuery(queryString) {
  assert(isString(queryString), `parseQuery(queryString): expect queryString to be type of String, but got ${typeOf(queryString)}`)

  let queryObject = {}, str = queryString, lastIdx, params

  lastIdx = queryString.lastIndexOf('?')
  if (lastIdx > -1) {
    str = queryString.substring(lastIdx + 1)
  }
  params = str.split('&')
  params.forEach(param => {
    let [k, v] = param.split('=')
    if (isSet(k)) {
      queryObject[k] = isSet(v) ? v : ''
    }
  })

  return queryObject
}

/**
 * 
 * @param {String} left - a url or query string
 * @param {String} right - a query string
 * @returns {String} - a combined string
 */
export function queryJoin(left, right) {
  let joinCharacter
  let alreadHasQuery = /[%\w]+=/.test(left)
  if (!alreadHasQuery) {
    joinCharacter = /\?$/.test(left) ? '' : '?'
  }
  if (alreadHasQuery) {
    joinCharacter = /&$/.test(left) ? '' : '&'
  }
  return [left, joinCharacter, right].join('')
}

export function sample1(list) {
  assert(isArray(list), `sample1(list): expect list to be type of Array, but got ${typeOf(list)}`)
  return list[randInt(list.length)]
}

export function sample(list) {
  assert(isArray(list), `sample(list): expect list to be type of Array, but got ${typeOf(list)}`)
  return shuffle(list).slice(0, randInt(list.length))
}

/**
 * 
 * @param {String} dateString 
 * @param {String} format 
 * 
 * @returns {Date} - instance of Date
 */
export function strToDate(dateString, format) {
  if (!isSet(dateString)) {
    return new Date()
  }
  return _dateConvert(dateString, 'date', format)
}

/**
 * 
 * @param {Sting} dateString 
 * @param {String} format - supported formats
 * @param {Boolean} seconds - true | false
 * 
 * @returns {String} - '1543047456700'
 */
export function strToTime(dateString, format, seconds) {
  if (!isSet(dateString)) {
    return seconds ? timestamp() : currentTime()
  }
  return _dateConvert(dateString, seconds ? 'seconds' : 'miniseconds', format)
}

/**
 * 
 * @param {String|Number} time - timestamp, maybe miniseconds
 * @param {String} [format] - supported format as follow:
 *                          'yyyy-mm-dd hh:mm:ss'
 *                          'yyyy-mm-dd hh:mm'
 *                          'yyyy-mm-dd'
 *                          'yyyy-mm'
 *                          'hh:mm:ss'
 *                          'hh:mm'
 * @returns {String} - date string 2018-11-28, 2018-11-28 14:03:23, 2000-01-01 01:01
 */
export function timeToStr(time = timestamp(), format = 'yyyy-mm-dd hh:mm') {
  return _dateConvert(time, 'dateString', format)
}

export function reverse(obj) {
  assert(isArray(obj) || isObject(obj) || isString(obj), `reverse(min): expect obj to be type of (Array|Object|String), but got ${typeOf(obj)}`)
  if (isArray(obj)) {
    return obj.reverse()
  }
  if (isString(obj)) {
    return obj.split('').reverse().join('')
  }
  let reverseObj = {}
  Object.keys(obj).forEach(key => {
    let v = obj[key]
    reverseObj[v] = key
  })
  return reverseObj
}

export function encodeJSON(obj, replacer, space) {
  try {
    return JSON.stringify(obj, replacer, space)
  } catch (error) {
    console.log(error)
  }
  return obj
}

export function decodeJSON(str, reviver) {
  try {
    return JSON.parse(str, reviver)
  } catch (error) {
    console.log(error)
  }
  return str
}