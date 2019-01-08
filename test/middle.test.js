const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  middle,
} = mytoolkit

test('middle', t => {
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let b = [0, 1, 2, 3]
  let c = [5]
  t.is(middle(a), 5)
  t.is(middle(b), 1)
  t.is(middle(c), 5)
  t.end()
})