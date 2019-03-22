const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  isEmptyObject
} = mytoolkit

test('isEmptyAObject', t => {
  t.true(isEmptyObject({}))
  t.false(isEmptyObject({ a: 1 }))

  t.end()
})