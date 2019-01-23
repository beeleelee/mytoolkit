/**
 * 
 * @param {String} left - a url or query string
 * @param {String} right - a query string
 * @returns {String} - a combined string
 */
export function queryJoin(left, right) {
  let joinCharacter
  let alreadHasQuery = /[%\w]+=/.test(left)
  if (!alreadHasQuery) {
    joinCharacter = /\?$/.test(left) ? '' : '?'
  }
  if (alreadHasQuery) {
    joinCharacter = /&$/.test(left) ? '' : '&'
  }
  return [left, joinCharacter, right].join('')
}

export default queryJoin