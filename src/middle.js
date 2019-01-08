import typeOf from './typeOf'

export function middle(list) {
  if (typeOf(list) !== 'Array') {
    throw new TypeError('expected param to be an Array! but got a type of ' + typeOf(list))
  }
  const len = list.length

  return list[Math.floor(len / 2)]
}

export default middle