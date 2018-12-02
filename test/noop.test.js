import test from 'ava'
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  noop,
  typeOf
} = mytoolkit

test('echo', t => {
  t.is(typeOf(noop), 'Function')
  t.is(typeOf(noop()), 'Undefined')
})