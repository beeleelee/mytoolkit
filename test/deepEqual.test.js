const test = require('tape')
require('browser-env')()
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  deepEqual
} = mytoolkit

test('deepEqual', t => {
  t.true(deepEqual(undefined, null))
  t.true(deepEqual('8', 8))
  t.false(deepEqual({ a: 1 }, { a: 2 }))
  t.false(deepEqual({ foo: 'oh' }, { foo: 'oh!' }))
  t.true(deepEqual([0, 1, 2], [0, 1, '2']))
  t.true(deepEqual({ a: { b: 3 } }, { a: { b: 3 } }))
  t.true(deepEqual(['a', [1, 2, 3, { x: 'x', z: 'z' }], 'c'], ['a', [1, 2, 3, { x: 'x', z: 'z' }], 'c']))
  t.true(deepEqual({ a: 1, b: 2, c: ['t', 9, null, { n: 9 }] }, { a: 1, b: 2, c: ['t', 9, null, { n: 9 }] }))
})