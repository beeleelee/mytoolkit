const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  head,
} = mytoolkit

test('head', t => {
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  t.deepEqual(head(a, 2), [1, 2])
  t.is(head(a), 1)
  t.deepEqual(head(a, 4), [1, 2, 3, 4])
  t.end()
})