export function typeOf(obj) {
  let objName = Object.prototype.toString.call(obj)
  objName = objName.slice(8, -1)
  if (objName === 'Number' && isNaN(obj)) {
    return 'NaN'
  }
  return objName
}

export function isObject(obj){
  return typeOf(obj) === 'Object'
}

export function isArray(obj) {
  return typeOf(obj) === 'Array'
}

export function isString(obj) {
  return typeOf(obj) === 'String'
}

export function isNumber(obj) {
  return typeOf(obj * 1) === 'Number'
}


/**
 * we assume Undefined or Null as unsetted value
 * @params {*} value - value to be check
 * @returns {Boolean} if typeOf value is Undefined or Null return false, else return true 
 */
export function isSet(value) {
  const type = typeOf(value)
  return type !== 'Undefined' && type !== 'Null'
}

/**
 * we assume Undefined or Null as unsetted value
 * @params {*} value - value to be check
 * @returns {Boolean} if typeOf value is Undefined or Null return true, else return false
 */
export function isUnset(value) {
  return !isSet(value)
}

/**
 * @desc check the format for the input email 
 * 
 * @params {String} emailAddress - a email address
 * @returns {Boolean} - true | false 
 */
export const isEmail = (emailAddress) => {
  let emailRE = /^(?:[-\w])+(?:\.[-\w]+)*@(?:[-\w])+(?:(?:\.[-\w]+)+)$/
  if (emailAddress && emailRE.test(emailAddress)) {
    return true
  }

  return false
}

/**
 * 
 * @param {Number|String} uint - unsigned int
 * @return (true | false)
 */
export function isUInt(uint) {
  return /^\d+$/.test(uint)
}