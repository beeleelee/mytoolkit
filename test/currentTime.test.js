const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  currentTime,
  typeOf
} = mytoolkit

test('currentTime', t => {
  let time = currentTime()
  t.is(typeOf(time), 'Number')
  t.is(String(time).length, 13)

  t.end()
})