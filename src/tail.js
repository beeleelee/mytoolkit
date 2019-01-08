import typeOf from './typeOf'

export function tail(list, size = 1) {
  if (typeOf(list) !== 'Array') {
    throw new TypeError('expected param to be an Array! but got a type of ' + typeOf(list))
  }
  const realSize = Math.min(size, list.length)
  if (realSize === 0) return ''
  if (realSize === 1) return list.slice(-1)

  return list.slice(-realSize)
}

export default tail