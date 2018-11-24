import test from 'ava'
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  timestamp,
  typeOf
} = mytoolkit 

test('timestamp', t => {
  let time = timestamp()
  t.is(typeOf(time), 'Number')
  t.is(String(time).length, 10)
})