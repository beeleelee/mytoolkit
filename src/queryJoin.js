export function queryJoin(left, right) {
  let joinCharacter
  let alreadHasQuery = left.indexOf('?') > -1
  if (!alreadHasQuery) {
    joinCharacter = '?'
  }
  if (alreadHasQuery && /[\?&]$/.test(left)) {
    joinCharacter = ''
  }
  if (alreadHasQuery && !/[\?&]$/.test(left)) {
    joinCharacter = '&'
  }
  return [left, joinCharacter, right].join('')
}

export default queryJoin