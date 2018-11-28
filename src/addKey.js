import typeOf from './typeOf'
import deepCopy from './deepCopy'
/**
 * usage - react list render
 * 
 * @param {Array<Object>} collection - a list of plain object
 * @param {String} [prefix] - add prefix for each key
 * @returns {Array<Object>} - return a copy list of plain object who's 'key' property has been setted 
 */
export function addKey(collection, prefix = '') {
  return collection.map((item, key) => {
    if(typeOf(item.key) !== 'Undefined'){
      return item 
    }
    let copy = deepCopy(item)

    copy.key = prefix + (typeOf(copy.id) !== 'Undefined' ? copy.id : key) 
    return copy  
  })
}

export default addKey