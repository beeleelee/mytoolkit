import {
  typeOf,
  isUnset,
} from './base'

export function excludeProps(obj, exclude = []) {
  if (typeOf(obj) !== 'Object') {
    throw new TypeError('expected plain object')
  }
  if (typeOf(exclude) === 'String') {
    exclude = [exclude]
  }
  const r = {}
  const shouldExclude = (name) => {
    if (typeOf(exclude) === 'Function') {
      return exclude(name)
    }
    return exclude.indexOf(name) > -1
  }
  Object.keys(obj).forEach(name => {
    if (!shouldExclude(name)) r[name] = obj[name]
  })
  return r
}

export function getProp(obj, nameArray, defaultValue = '') {
  if (typeOf(obj) !== 'Object') {
    throw new TypeError(`expect param to be plain object but got type of ${typeOf(obj)}`)
  }

  if (typeOf(nameArray) !== 'Array') {
    throw new TypeError(`expect param to be array but got type of ${typeOf(obj)}`)
  }
  let value = obj
  for (let i = 0, l = nameArray.length; i < l; i++) {
    value = value[nameArray[i]]
    if (isUnset(value)) {
      break
    }
  }
  return value || defaultValue
}