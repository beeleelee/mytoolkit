import typeOf from './typeOf'

export function head(list, size = 1) {
  if (typeOf(list) !== 'Array') {
    throw new TypeError('expected param to be an Array! but got a type of ' + typeOf(list))
  }
  const realSize = Math.min(size, list.length)
  if (realSize === 0) return ''
  if (realSize === 1) return list[0]

  return list.slice(0, realSize)
}

export default head