import typeOf from './typeOf'

export function shallowEqual(a, b) {
  if (a == b) return true

  let typeA = typeOf(a)
  let typeB = typeOf(b)

  if (typeA !== typeB) return false

  switch (typeA) {
    case 'Object':
      return shallowEqualObject(a, b)
    case 'Array':
      return shallowEqualArray(a, b)
    default:
      return false
  }
}

function shallowEqualObject(a, b) {
  let aKeys = Object.keys(a)
  if (aKeys.length !== Object.keys(b)) {
    return false
  }

  let r = true
  aKeys.forEach(key => {
    if (a[key] != b[key]) {
      r = false
    }
  })
  return r
}

function shallowEqualArray(a, b) {
  if (a.length !== b.length) {
    return false
  }

  let r = true
  a.forEach((v, i) => {
    if (v != b[i]) {
      r = false
    }
  })

  return r
}

export default shallowEqual