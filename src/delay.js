import typeOf from './typeOf'

export function delay(func, wait = 0, ...args) {
  if (typeOf(func) !== 'Function') {
    throw new TypeError(`unexpected type of ${typeOf(func)}`)
  }
  if (typeOf(wait) !== 'Number') {
    throw new TypeError(`unexpected type of ${typeOf(wait)}`)
  }
  return setTimeout(() => {
    func(...args)
  }, wait)
}

export default delay 