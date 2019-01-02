const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  excludeProps
} = mytoolkit

test('excludeProps', t => {
  const o = { a: 1, b: 2, c: 3, d: 4 }
  t.deepEqual(excludeProps(o, 'a'), { b: 2, c: 3, d: 4 })
  t.deepEqual(excludeProps(o, ['a', 'd']), { b: 2, c: 3 })

  t.end()
})