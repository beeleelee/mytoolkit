const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  shuffle
} = mytoolkit

test('shuffle', t => {
  let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  t.notDeepEqual(shuffle(a), a)
  t.end()
})