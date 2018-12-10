import typeOf from './typeOf'
import randInt from './randInt'

/**
 * 
 * @param {Number} size - the size of the return string 
 * @param {String} sourceCode - the source characters from which to generate the random string
 * @returns {String} - a random string 
 */
export function randStr(size = 6, sourceCode) {
  let code = '0123456789abcdefghijklmnopqrstuvwxyzsABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let characters = Array.from({ length: size })

  if (typeOf(sourceCode) === 'String') {
    code = sourceCode
  }
  let codeLength = code.length

  return characters.map(() => code[randInt(codeLength)]).join('')
}

export default randStr