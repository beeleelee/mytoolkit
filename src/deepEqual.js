/**
 * @desc a way to tell if two object hold the same value recursively.
 */

import typeOf from './typeOf'

export function deepEqual(a, b) {
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

export default deepEqual