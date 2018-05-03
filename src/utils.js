export const now = (function () {
  let now
  if (typeof performance !== 'undefined') {
    now = () => performance.now()
  } else {
    now = () => +new Date
  }
  return now
})()