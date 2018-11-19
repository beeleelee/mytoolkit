import typeOf from './typeOf'

export function padZero(num, size = 2) {
  let numberToFill = parseFloat(num)
  if(typeOf(numberToFill) !== 'Number'){
    throw new TypeError('fillZero needs number for its first parameter!')
  }

  numberToFill = String(numberToFill)
  let fillSize = size - numberToFill.length
  if(fillSize <= 0){
    return numberToFill
  }
  
  return Array.from({length: fillSize}).map(item => 0).join('') + numberToFill
}

export default padZero