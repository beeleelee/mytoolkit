import typeOf from './typeOf'
import randInt from './randInt'

export function randStr(size = 6, sourceCode) {
  let code = '0123456789abcdefghijklmnopqrstuvwxyzsABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let characters = Array.from({length: size})

  if(typeOf(sourceCode) === 'String'){
    code = sourceCode
  }
  let codeLength = code.length
  
  return characters.map(() => code[randInt(codeLength)]).join('')
}

export default randStr