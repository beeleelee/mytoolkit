export function compose(...fns) {
  return fns.reduce((c, fn) => (...args) => c(fn(...args)))
}

export default compose 