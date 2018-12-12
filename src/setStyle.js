import typeOf from './typeOf'
import dashToCamel from './dashToCamel'
import trim from './trim'

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
    ele.style[name] = tryAddPX(name, value)
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

const properties = [
  'width',
  'height',
  'minWidth',
  'maxWidth',
  'minHeight',
  'maxHeight',
  'left',
  'top',
  'right',
  'bottom',
  'borderWidth',
  'borderTopWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderRightWidth',
  'borderRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderSpacing',
  'fontSize',
  'letterSpacing',
  'margin',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'padding',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
]
/**
 * @ignore 
 */
function tryAddPX(name, value) {
  // check if name in the property list which can add px, if not return value 
  if (properties.indexOf(name) == -1) {
    return value
  }

  let cValue = trim(value) - 0

  // only add px to numeric value
  if (typeOf(cValue) !== 'Number') {
    return value
  }

  return `${cValue}px`
}

export default setStyle 