import typeOf from './typeOf'

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

export default delay 