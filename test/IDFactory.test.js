import test from 'ava'
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  IDFactory
} = mytoolkit 

const ID1 = IDFactory(0)
const ID100 = IDFactory(100)

test('IDFactory', t => {
  t.is(ID1(), 0)
  t.is(ID1(), 1)
  t.is(ID1(), 2)
  t.is(ID100(), 100)
  t.is(ID100(), 101)
  t.is(ID100(), 102)
  t.is(ID1(), 3)
  t.is(ID100(), 103)
})