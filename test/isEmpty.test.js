const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  isEmpty
} = mytoolkit

test('isEmpty', t => {
  t.true(isEmpty())
  t.true(isEmpty(null))
  t.true(isEmpty([]))
  t.true(isEmpty({}))
  t.true(isEmpty(''))

  t.false(isEmpty(true))
  t.false(isEmpty(9))
  t.false(isEmpty([1, 2, 3]))
  t.false(isEmpty({ b: 5 }))
  t.false(isEmpty('test'))

  t.end()
})