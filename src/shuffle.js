import randInt from './randInt'
import typeOf from './typeOf'

/**
 * 
 * @param {Array} list - a simple array
 * @returns {Array} - return a reordered list
 */
export function shuffle(list) {
  if (typeOf(list) !== 'Array') {
    throw new TypeError(`expect param type of Array but got ${typeOf(list)}`)
  }
  const len = list.length
  const r = [...list]
  let randIdx, midValue
  for (let i = 0; i < len - 1; i++) {
    randIdx = randInt(i + 1, len)
    midValue = r[i]
    r[i] = r[randIdx]
    r[randIdx] = midValue
  }
  return r
}

export default shuffle 