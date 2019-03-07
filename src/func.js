import {
  typeOf,
  isSet,
  isFunction,
  isNumber,
  assert,
} from './base'

/**
 * @desc mimic command echo
 * @param {Any} arg - currently only accept and return the first arg
 * @returns {Any} - arg 
 */
export function echo(arg) {
  return arg
}

/**
 * @desc a empty function doing nothing when called
 */
export function noop() { }

/**
 * 
 * @param {Function} func -  this is function param
 * @param {Number} wait - miniseconds of delay 
 * @param  {...any} args - arg list for the func when it called after wait time
 * @returns {Number} - relay of whate setTimeout returns
 */
export function delay(func, wait = 0, ...args) {
  assert(isFunction(func), `delay(func, wait, ...args): expect func to be type of Function, but got ${typeOf(func)}`)
  assert(isNumber(wait), `delay(func, wait, ...args): expect wait to be type of Number, but got ${typeOf(wait)}`)

  return setTimeout(() => {
    func(...args)
  }, wait)
}

export function compose(...fns) {
  return fns.reduce((c, fn) => (...args) => c(fn(...args)))
}

/**
 * 
 * @param {Function} func - any function
 * @param {Number} wait - the duration that get off multiple call
 * @param {Boolean} immediate - if immediate set true, the func will get called by the first time call and won't called during the wait time
 * @returns {Function} - a wrapper of func, multiple called wrapper during wait time, it will only call func one time.
 */
export function debounce(func, wait = 0, immediate) {
  assert(isFunction(func), `debounce(func, wait, ...args): expect func to be type of Function, but got ${typeOf(func)}`)
  assert(isNumber(wait), `debounce(func, wait, ...args): expect wait to be type of Number, but got ${typeOf(wait)}`)

  let timeHandle = null

  const wrapper = (...args) => {
    if (timeHandle) {
      clearTimeout(timeHandle)
    }
    timeHandle = setTimeout(() => {
      func(...args)
      timeHandle = null
    }, wait)
  }

  const immediateWrapper = (...args) => {
    if (timeHandle) {
      return
    }
    func(...args)
    timeHandle = setTimeout(() => {
      timeHandle = null
    }, wait)
  }

  return immediate ? immediateWrapper : wrapper
}

const defaultTest = value => !!value
export function guard(test = defaultTest, safeValue) {
  assert(isFunction(test), `guard(test, safeValue): expect test to be type of Function, but got ${typeOf(test)}`)
  assert(isSet(safeValue), 'guard(test, safeValue): expect safeValue to be set')

  return value => {
    return test(value) ? value : safeValue
  }
}