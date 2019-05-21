const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  toFixed
} = mytoolkit

test('toFixed', t => {
  t.is(toFixed(3.141592653589793), '3.14')
  t.is(toFixed('3.14159', 1), '3.1')
  t.is(toFixed('3.14159', 3), '3.142')

  t.end()
})