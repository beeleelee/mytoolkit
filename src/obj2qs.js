import typeOf from './typeOf'
import isSet from './isSet'
/**
 * 
 * @param {Object} obj - a plain object
 * @returns {String} - a query string 
 */
export function obj2qs(obj) {
  if (typeOf(obj) !== 'Object') {
    throw new TypeError(`expect param to be plain object but got type of ${typeOf(obj)}`)
  }

  const params = Object.keys(obj).map(k => {
    let v = obj[k]
    v = isSet(v) ? v : ''
    return `${k}=${v}`
  })

  return params.length ? params.join('&') : ''
}

export default obj2qs