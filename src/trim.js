/**
 * 
 * @param {String} str - a string that to be trim spaces at begin or end of the string.
 * @returns {String} a string without spaces at begin or end of itself.
 */
export function trim(str) {
  return (str + '').replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
}

export default trim 