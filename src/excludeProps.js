import typeOf from './typeOf'
import isSet from './isSet'

export function excludeProps(obj, exclude = []) {
  if (typeOf(obj) !== 'Object') {
    throw new TypeError('expected plain object')
  }
  if (typeOf(exclude) === 'String') {
    exclude = [exclude]
  }
  let r = {
    ...obj
  }
  exclude.forEach(name => {
    if (isSet(r[name])) delete r[name]
  })
  return r
}

export default excludeProps