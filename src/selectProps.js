import typeOf from './typeOf'
import isSet from './isSet'

export function selectProps(obj, select = []) {
  if (typeOf(obj) !== 'Object') {
    throw new TypeError('expected plain object')
  }
  if (typeOf(select) === 'String') {
    select = [select]
  }
  let r = {}
  select.forEach(name => {
    if (isSet(obj[name])) r[name] = obj[name]
  })

  return r
}

export default selectProps