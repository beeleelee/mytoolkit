import test from 'ava'
require('browser-env')()
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  shallowEqual
} = mytoolkit

test('shallowEqual', t => {
  t.true(shallowEqual(undefined, null))
  t.true(shallowEqual('8', 8))
  t.false(shallowEqual({ a: 1 }, { a: 2 }))
  t.false(shallowEqual({ foo: 'oh' }, { foo: 'oh!' }))
  t.true(shallowEqual([0, 1, 2], [0, 1, '2']))
  t.false(shallowEqual({ a: { b: 3 } }, { a: { b: 3 } }))
  t.true(shallowEqual(['a', 'b', 'c'], ['a', 'b', 'c']))
  t.true(shallowEqual({ a: 1, b: 2 }, { a: 1, b: 2 }))
})