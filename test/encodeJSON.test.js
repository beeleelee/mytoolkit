const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  encodeJSON,
  decodeJSON
} = mytoolkit

test('encodeJSON', t => {
  t.is(encodeJSON([1, 2, 3]), '[1,2,3]')
  t.is(encodeJSON({ a: 1, b: 2, c: 3 }), '{"a":1,"b":2,"c":3}')
  t.is(encodeJSON(true), 'true')
  t.is(encodeJSON(''), '""')
  t.is(encodeJSON(null), 'null')

  t.end()
})

test('decodeJSON', t => {
  t.deepEqual(decodeJSON('[1,2,3]'), [1, 2, 3])
  t.deepEqual(decodeJSON('{"a":1,"b":2,"c":3}'), { a: 1, b: 2, c: 3 })
  t.is(decodeJSON('""'), '')

  t.end()
})