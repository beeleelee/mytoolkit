const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  tail,
} = mytoolkit

test('tail', t => {
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  t.deepEqual(tail(a, 2), [8, 9])
  t.is(tail(a), 9)
  t.deepEqual(tail(a, 4), [6, 7, 8, 9])
  t.end()
})