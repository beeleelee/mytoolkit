import typeOf from './typeOf'
import trim from './trim'

export function dashToCamel(dashStr) {
  if (typeOf(dashStr) !== 'String') {
    throw new TypeError(`dashToCamel expected a dashStr, but got ${typeOf(dashStr)}`)
  }
  let camelStr = dashStr.toLowerCase()
  camelStr = trim(camelStr)
  // remove the dash at begin or end
  camelStr = camelStr.replace(/^-|-$/g, '')

  camelStr = camelStr.replace(/-(\w)/g, (m, w) => w.toUpperCase())

  return camelStr
}

export default dashToCamel