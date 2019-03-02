const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  getProp
} = mytoolkit

test('getProp', t => {
  const o = { a: {b: {c: {d: 1}}}, m: {n: [1]} }

  t.is(getProp(o, ['a', 'b', 'c', 'd']), 1)
  t.is(getProp(o, ['a', 'm'], 'default'), 'default')
  t.is(getProp(o, ['m', 'n', 0]), 1)
  t.end()
})