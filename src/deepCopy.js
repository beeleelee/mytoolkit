import typeOf from './typeOf'

/**
 * 
 * @param {*} obj - any type in javascript
 * @return the copy of obj
 * 
 */
export function deepCopy(obj) {
  let type = typeOf(obj)
  let r
  switch(type){
  case 'Object':
    r = {}
    Object.keys(obj)
      .forEach(key => {
        r[key] = deepCopy(obj[key])
      })
    break
  case 'Array':
    r = []
    obj.forEach((v, k) => {
      r[k] = deepCopy(v)
    })
    break
  default:
    r = obj
  }
  return r
}

export default deepCopy