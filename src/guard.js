import typeOf from './typeOf'
import isUnset from './isUnset'

const defaultTest = value => !!value
export function guard(test = defaultTest, safeValue) {
  if (typeOf(test) !== 'Function') {
    throw new TypeError(`expected typeOf Function but got ${typeOf(test)}`)
  }
  if (isUnset(safeValue)) {
    throw new TypeError(`expected safeValue to be set but got ${typeOf(safeValue)}`)
  }
  return value => {
    return test(value) ? value : safeValue
  }
}

export default guard 