const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  extend
} = mytoolkit

test('extend', t => {
  const o = { a: 1, b: 2, c: 3, d: 4 }
  const a = { a: 'a', b: 'b', c: 'c', d: 'd' }
  const b = { m: 5, n: 6 }
  const c = { x: 'x', z: 'z' }
  t.deepEqual(extend({}, o, b), { a: 1, b: 2, c: 3, d: 4, m: 5, n: 6 })
  t.deepEqual(extend({}, a, c), { a: 'a', b: 'b', c: 'c', d: 'd', x: 'x', z: 'z' })
  t.deepEqual(extend({}, o, a), { a: 'a', b: 'b', c: 'c', d: 'd' })
  t.deepEqual(extend(o, a), { a: 'a', b: 'b', c: 'c', d: 'd' })
  t.deepEqual(extend({}, undefined), {})
  t.end()
})