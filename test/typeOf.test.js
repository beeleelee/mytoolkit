import test from 'ava'
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  typeOf 
} = mytoolkit 

test('typeOf', t => {
  t.is(typeOf(NaN), 'NaN')
  t.is(typeOf(0), 'Number')
  t.is(typeOf({}), 'Object')
  t.is(typeOf([]), 'Array')
  t.is(typeOf(), 'Undefined')
  t.is(typeOf(null), 'Null')
  t.is(typeOf(/.+/), 'RegExp')
  t.is(typeOf(false), 'Boolean')
})