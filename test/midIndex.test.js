const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  midIndex,
} = mytoolkit

test('midIndex', t => {
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let b = [0, 1, 2, 3]
  let c = [5]
  t.is(midIndex(a), 4)
  t.is(midIndex(b), 1)
  t.is(midIndex(c), 0)
  t.end()
})