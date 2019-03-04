import {
  typeOf
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
  if (typeOf(func) !== 'Function') {
    throw new TypeError(`unexpected type of ${typeOf(func)}`)
  }
  if (typeOf(wait) !== 'Number') {
    throw new TypeError(`unexpected type of ${typeOf(wait)}`)
  }
  return setTimeout(() => {
    func(...args)
  }, wait)
}

export function compose(...fns) {
  return fns.reduce((c, fn) => (...args) => c(fn(...args)))
}