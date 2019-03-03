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

/**
 * 
 * @param {*} obj - any type in javascript
 * @return the copy of obj
 * 
 */
export function deepCopy(obj) {
  let type = typeOf(obj)
  let r
  switch (type) {
  case 'Object':
    r = {}
    Object.keys(obj)
      .forEach(key => {
        r[key] = deepCopy(obj[key])
      })
    break
  case 'Array':
    r = []
    obj.forEach((v, k) => {
      r[k] = deepCopy(v)
    })
    break
  default:
    r = obj
  }
  return r
}

/**
 * @desc a way to tell if two object hold the same value recursively.
 */
export function deepEqual(a, b) {
  if (a == b) return true

  let typeA = typeOf(a)
  let typeB = typeOf(b)

  if (typeA !== typeB) return false

  switch (typeA) {
  case 'Object':
    return deepEqualObject(a, b)
  case 'Array':
    return deepEqualArray(a, b)
  default:
    return false
  }
}

function deepEqualObject(a, b) {
  let aKeys = Object.keys(a)
  if (aKeys.length !== Object.keys(b).length) {
    return false
  }

  let r = true
  aKeys.forEach(key => {
    if (a[key] != b[key]) {
      let ta = typeOf(a[key])
      let tb = typeOf(b[key])
      if (ta !== tb) {
        r = false
      } else {
        switch (ta) {
        case 'Object':
          r = deepEqualObject(a[key], b[key])
          break
        case 'Array':
          r = deepEqualArray(a[key], b[key])
          break
        default:
          r = false
          break
        }
      }
    }
  })
  return r
}

function deepEqualArray(a, b) {
  if (a.length !== b.length) {
    return false
  }

  let r = true
  a.forEach((v, i) => {
    if (v != b[i]) {
      let ta = typeOf(v)
      let tb = typeOf(b[i])
      if (ta !== tb) {
        r = false
      } else {
        switch (ta) {
        case 'Object':
          r = deepEqualObject(v, b[i])
          break
        case 'Array':
          r = deepEqualArray(v, b[i])
          break
        default:
          r = false
          break
        }
      }
    }
  })

  return r
}