import {
  typeOf,
  isUnset,
  isSet,
  isObject,
  isString,
  isArray,
  assert,
} from './base'

export function excludeProps(obj, exclude = []) {
  assert(isObject(obj), `excludeProps(obj, exclude): expect obj to be type of Object, but got ${typeOf(obj)}`)

  if (isString(exclude)) {
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
  assert(isObject(obj), `getProp(obj, nameArray, defaultValue): expect obj to be type of Object, but got ${typeOf(obj)}`)
  assert(isArray(nameArray), `getProp(obj, nameArray, defaultValue): expect nameArray to be type of Array, but got ${typeOf(nameArray)}`)

  let value = obj
  for (let i = 0, l = nameArray.length; i < l; i++) {
    value = value[nameArray[i]]
    if (isUnset(value)) {
      break
    }
  }
  return value || defaultValue
}

/**
 * 
 * @param {Object} obj - a plain object
 * @returns {String} - a query string 
 */
export function obj2qs(obj) {
  assert(isObject(obj), `obj2qs(obj): expect obj to be type of Object, but got ${typeOf(obj)}`)

  const params = Object.keys(obj).map(k => {
    let v = obj[k]
    v = isSet(v) ? v : ''
    return `${k}=${v}`
  })

  return params.length ? params.join('&') : ''
}

export function selectProps(obj, select = []) {
  assert(isObject(obj), `selectProps(obj, select): expect obj to be type of Object, but got ${typeOf(obj)}`)

  if (isString(select)) {
    select = [select]
  }
  const r = {}
  const shouldSelect = (name) => {
    if (typeOf(select) === 'Function') {
      return select(name)
    }
    return select.indexOf(name) > -1
  }
  Object.keys(obj).forEach(name => {
    if (shouldSelect(name)) r[name] = obj[name]
  })
  return r
}

export function propCompact(obj) {
  assert(isObject(obj), `propCompact(obj): expect obj to be type of Object, but got ${typeOf(obj)}`)

}