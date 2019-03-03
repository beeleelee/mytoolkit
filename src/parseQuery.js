import typeOf from './typeOf'
import {
  isSet
} from './base'

export function parseQuery(queryString) {
  if (typeOf(queryString) !== 'String') {
    throw new TypeError(`expect param to be type of String, but got ${typeOf(queryString)}`)
  }
  let queryObject = {}, str = queryString, lastIdx, params

  lastIdx = queryString.lastIndexOf('?')
  if (lastIdx > -1) {
    str = queryString.substring(lastIdx + 1)
  }
  params = str.split('&')
  params.forEach(param => {
    let [k, v] = param.split('=')
    if (isSet(k)) {
      queryObject[k] = isSet(v) ? v : ''
    }
  })

  return queryObject
}

export default parseQuery