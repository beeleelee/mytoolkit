const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  isSet 
} = mytoolkit 

test('isSet', t => {
  const obj = {
    name: 'obj',
    type: null
  }
  t.true(isSet(obj.name))
  t.false(isSet(obj.id))
  t.false(isSet(obj.type))
})