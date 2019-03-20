const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  addKey
} = mytoolkit

test('addKey', t => {
  const c1 = [
    { name: 'a' },
    { name: 'b' },
    { name: 'c' },
  ]
  const c2 = addKey(c1)

  t.is(c1[0].key, undefined)
  t.is(c2[0].key, '0')
  t.is(c2[2].key, '2')

  const c3 = addKey(c1, null, 'prefix')
  t.is(c3[0].key, 'prefix0')
  t.is(c3[1].key, 'prefix1')

  const c4 = [
    { id: 1 },
    { id: 2 }
  ]
  const c5 = addKey(c4, 'id')
  t.is(c5[0].key, '1')
  t.is(c5[1].key, '2')

  const c6 = addKey(c4, null, 'pre')
  t.is(c6[0].key, 'pre1')
  t.is(c6[1].key, 'pre2')

  t.end()
})