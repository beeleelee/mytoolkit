import typeOf from './typeOf'
import isUnset from './isUnset'

export function getProp(obj, nameArray, defaultValue = ''){
  if (typeOf(obj) !== 'Object') {
    throw new TypeError(`expect param to be plain object but got type of ${typeOf(obj)}`)
  }

  if (typeOf(nameArray) !== 'Array') {
    throw new TypeError(`expect param to be array but got type of ${typeOf(obj)}`)
  }
  let value = obj
  for(let i = 0, l = nameArray.length; i < l; i++){
    value = value[nameArray[i]]
    if(isUnset(value)){
      break 
    }
  }
  return value || defaultValue
}

export default getProp 