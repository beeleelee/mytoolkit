import typeOf from './typeOf'

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

export default excludeProps