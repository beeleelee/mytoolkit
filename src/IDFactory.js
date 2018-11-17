export default function IDFactory(startValue = 1) {
  return function() {
    return startValue++
  }
}