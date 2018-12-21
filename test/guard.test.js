const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  guard,
  isSet
} = mytoolkit

test('guard', t => {
  const guardZero = guard(value => value !== 0, 1)
  const guardNull = guard(value => value !== null, [])
  const guardUnset = guard(value => isSet(value), {})

  t.is(guardZero(0), 1)
  t.deepEqual(guardNull(null), [])
  t.deepEqual(guardUnset(), {})

  t.end()
})