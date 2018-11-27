/**
 * 
 * @param {Number} [startValue] - start value for generating ids
 * @returns {Function} - id will plus 1 at each call of the func
 * 
 */
export function IDFactory(startValue = 1) {
  return function() {
    return startValue++
  }
}

export default IDFactory