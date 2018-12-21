const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  addComma
} = mytoolkit 

test('addComma', t => {
  t.is(addComma(1000), '1,000')
  t.is(addComma(10000000.001), '10,000,000.001')
  t.is(addComma('10000000.001'), '10,000,000.001')
})