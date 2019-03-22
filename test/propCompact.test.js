const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  propCompact
} = mytoolkit

test('propCompact', t => {
  t.deepEqual(propCompact({ a: 0, b: 2, c: 3 }), { a: 0, b: 2, c: 3 })
  t.deepEqual(propCompact({ a: 0, b: 2, c: 3, d: null }), { a: 0, b: 2, c: 3 })
  t.deepEqual(propCompact({ a: 0, b: 2, c: 3, e: [] }), { a: 0, b: 2, c: 3 })
  t.deepEqual(propCompact({ a: 0, b: 2, c: 3, f: {} }), { a: 0, b: 2, c: 3 })
  t.deepEqual(propCompact({ a: 0, b: 2, c: 3, g: '' }), { a: 0, b: 2, c: 3 })
  t.deepEqual(propCompact({ a: 0, b: 2, c: 3, m: undefined }), { a: 0, b: 2, c: 3 })

  t.end()
})