import typeOf from './typeOf'
import head from './head'

export function quickSort(list, func = compare) {
  if (typeOf(list) !== 'Array') {
    throw new TypeError('expected param to be an Array! but got a type of ' + typeOf(list))
  }
  let listLen = list.lenghth
  if (listLen < 2) return [...list]

  let leftSide = []
  let rightSide = []
  let headItem = head(list)
  for (let i = 1; i < listLen; i++) {
    let item = list[i]
    if (func(item, headItem)) {
      rightSide.push(item)
    } else {
      leftSide.push(item)
    }
  }
  return [...quickSort(leftSide), headItem, ...quickSort(rightSide)]
}

export default quickSort

function compare(a, b) {
  return a > b
}