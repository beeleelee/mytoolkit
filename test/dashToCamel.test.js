const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  dashToCamel
} = mytoolkit

test('dashToCamel', t => {
  t.is(dashToCamel('-webkit-transform-'), 'webkitTransform')
  t.is(dashToCamel('font-size'), 'fontSize')
  t.is(dashToCamel('align-items'), 'alignItems')
  t.is(dashToCamel('textAlign'), 'textAlign')

  t.end()
})