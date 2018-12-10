import typeOf from './typeOf'
import dashToCamel from './dashToCamel'

let styleKeys = null

/**
 * @ignore
 */
const setSingleStyle = (ele, name, value) => {
  if (!ele || !ele.style) {
    throw new Error('missing HTML node element for setStyle!')
  }
  name = dashToCamel(name)
  name = checkVendorPrefix(name)
  if (typeOf(name) !== 'Undefined' && typeOf(value) !== 'Undefined') {
    ele.style[name] = value
  }
}

/**
 * @param {HTMLElement} ele - dom element 
 * @param {String} name - the style property name, it also can be an object to set multiple style properties
 * @param {String|Number} value - the value of the style property
 * 
 * @example
 * 
 * setStyle(document.body, 'fontSize', '16px')
 * setStyle(doucment.body, {
 *  backgroundColor: '#ffffff',
 *  minHeight: '100vh'
 * })
 */
export const setStyle = (ele, name, value) => {
  if (typeOf(name) === 'Object') {
    Object.keys(name)
      .map(n => {
        setSingleStyle(ele, n, name[n])
      })
  } else {
    setSingleStyle(ele, name, value)
  }
}

/**
 * @ignore
 */
function checkVendorPrefix(name) {
  let styleKeys = getStyleKeys()

  return styleKeys[name] || name
}

/**
 * @ignore
 */
function getStyleKeys() {
  if (styleKeys !== null) return styleKeys

  if (typeof document === 'undefined') {
    throw new Error('missing document!')
  }

  let computedStyles = Array.from(getComputedStyle(document.body))
  let keys = Object.keys(computedStyles).filter(
    key => /^webkit(transform|transition)$/i.test(key)
  )
  styleKeys = keys.reduce((res, key) => {
    let name = key.replace(/^webkit(\w)/, (a, s) => s.toLowerCase())
    res[name] = key
    return res
  }, {})

  return styleKeys
}

export default setStyle 