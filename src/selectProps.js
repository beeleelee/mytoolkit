import typeOf from './typeOf'

export function selectProps(obj, select = []) {
  if (typeOf(obj) !== 'Object') {
    throw new TypeError('expected plain object')
  }
  if (typeOf(select) === 'String') {
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

export default selectProps