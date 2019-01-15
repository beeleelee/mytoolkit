import typeOf from './typeOf'
import quickSort from './quickSort'

export function nlargest(list, num = 1) {
  if (typeOf(list) !== 'Array') {
    throw new TypeError(`expect param to be type of Array, but got ${typeOf(list)}`)
  }

  return quickSort(list).slice(0, num)
}

export default nlargest