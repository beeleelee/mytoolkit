export function IDFactory(startValue = 1) {
  return function() {
    return startValue++
  }
}

export default IDFactory