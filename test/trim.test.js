import test from 'ava'
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  trim
} = mytoolkit

test('trim', t => {
  t.is(trim(' abc '), 'abc')
  t.is(trim('\tabc\n'), 'abc')
  t.is(trim(' ab c '), 'ab c')
  t.is(trim(), '')
})