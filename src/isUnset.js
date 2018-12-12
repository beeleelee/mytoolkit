import isSet from './isSet'
/**
 * we assume Undefined or Null as unsetted value
 * @params {*} value - value to be check
 * @returns {Boolean} if typeOf value is Undefined or Null return true, else return false
 */
export function isUnset(value) {
  return !isSet(value)
}

export default isUnset 