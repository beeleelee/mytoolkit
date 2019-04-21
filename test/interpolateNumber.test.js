const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  interpolateNumber
} = mytoolkit

test('interpolateNumber', t => {
  let start = 0, end = 100
  let interFunc = interpolateNumber(start, end)
  t.is(interFunc(0), 0)
  t.is(interFunc(1), 100)
  t.is(interFunc(0.5), 50)
  t.is(interFunc(0.3), 30)

  t.end()
})