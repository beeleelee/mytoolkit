const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  nsmallest,
} = mytoolkit

test('nsmallest', t => {
  const a = [3, 4, 98, 0, 1, 32, 24, 8]
  t.deepEqual(nsmallest(a, 1), [0])
  t.deepEqual(nsmallest(a, 3), [0, 1, 3])
  t.end()
})