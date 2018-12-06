import typeOf from './typeOf'

/**
 * 
 * @param {Function} func - any function
 * @param {Number} wait - the duration that get off multiple call
 * @param {Boolean} immediate - if immediate set true, the func will get called by the first time call and won't called during the wait time
 * @returns {Function} - a wrapper of func, multiple called wrapper during wait time, it will only call func one time.
 */
export function debounce(func, wait = 0, immediate) {
  if (typeOf(func) !== 'Function') {
    throw new TypeError(`unexpected type of ${typeOf(func)}, expect type of Function`)
  }
  if (typeOf(wait) !== 'Number') {
    throw new TypeError(`unexpected type of ${typeOf(wait)}, expect type of Number`)
  }

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

export default debounce