export function interpolateNumber(start, end) {
  return function (t) {
    return start + (end - start) * t
  }
}