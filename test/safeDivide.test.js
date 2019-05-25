const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  safeDivide
} = mytoolkit

test('safeDivide', t => {
  t.is(safeDivide(3, 5), 0.6)
  t.is(safeDivide(0, 0), 0)
  t.is(safeDivide(3, 0), 0)
  t.end()
})