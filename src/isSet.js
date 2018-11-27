import typeOf from './typeOf'
/**
 * we assume Undefined or Null as unsetted value
 * @params {*} value - value to be check
 * @returns {Boolean} if typeOf value is Undefined or Null return false, else return true 
 */
export function isSet (value) {
  const type = typeOf(value)
  return type !== 'Undefined' && type !== 'Null'
}

export default isSet 