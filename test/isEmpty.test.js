const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  isEmptyArray
} = mytoolkit

test('isEmptyArray', t => {
  t.true(isEmptyArray([]))
  t.false(isEmptyArray([1, 2, 3]))

  t.end()
})