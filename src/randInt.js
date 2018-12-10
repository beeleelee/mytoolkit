import typeOf from './typeOf.js'
/**
 * @param {Number} min - a simple int 
 * @param {Number} max - a simple int
 * @returns {Number} - a random int between min and max, maybe include min but not max
 */
export function randInt(min, max) {
  min = parseInt(min)
  max = parseInt(max)
  if (typeOf(min) !== 'Number') {
    throw new TypeError('randInt needs number from its parameter!')
  }

  if (!max) {
    max = min
    min = 0
  }
  return Math.floor(Math.random() * (max - min) + min)
}

export default randInt