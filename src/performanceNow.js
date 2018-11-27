export const performanceNow = (function () {
  let now
  if (typeof performance !== 'undefined') {
    now = () => performance.now()
  } else {
    now = () => +new Date
  }
  return now
})()

export default performanceNow