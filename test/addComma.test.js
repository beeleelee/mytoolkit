import test from 'ava'
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  addComma
} = mytoolkit 

test('addComma', t => {
  t.is(addComma(1000), '1,000')
})