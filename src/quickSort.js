import typeOf from './typeOf'
import middle from './middle'

export function quickSort(list, func = compare) {
  if (typeOf(list) !== 'Array') {
    throw new TypeError('expected param to be an Array! but got a type of ' + typeOf(list))
  }


}

export default quickSort

function compare(a, b) {
  return a > b
}