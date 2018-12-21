const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  noop,
  typeOf
} = mytoolkit

test('echo', t => {
  t.is(typeOf(noop), 'Function')
  t.is(typeOf(noop()), 'Undefined')

  t.end()
})