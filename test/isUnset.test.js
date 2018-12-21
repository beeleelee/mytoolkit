const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  isUnset
} = mytoolkit

test('isSet', t => {
  const obj = {
    name: 'obj',
    type: null
  }
  t.false(isUnset(obj.name))
  t.true(isUnset(obj.id))
  t.true(isUnset(obj.type))

  t.end()
})