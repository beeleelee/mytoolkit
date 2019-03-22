const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  isEmptyString
} = mytoolkit

test('isEmptyString', t => {
  t.true(isEmptyString(''))
  t.false(isEmptyString('text'))

  t.end()
})