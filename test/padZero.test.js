import test from 'ava'
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  padZero
} = mytoolkit 

test('padZero', t => {
  t.is(padZero(9), '09')
  t.is(padZero(9, 5), '00009')
})