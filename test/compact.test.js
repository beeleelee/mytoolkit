const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  compact
} = mytoolkit

test('compact', t => {
  let arr1 = [0, 1, 2, 3, false, 4, null, 5, NaN, 6]
  t.deepEqual(compact(arr1), [0, 1, 2, 3, 4, 5, 6])

  t.end()
})