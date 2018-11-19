import test from 'ava'
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  typeOf 
} = mytoolkit 

test('typeOf', t => {
  t.is(typeOf(NaN), 'NaN')
  t.is(typeOf(4), 'Number')
  t.is(typeOf({}), 'Object')
  t.is(typeOf([]), 'Array')
})