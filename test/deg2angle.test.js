const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  deg2angle
} = mytoolkit

test('deg2angle', t => {
  t.is(deg2angle(180), Math.PI)

  t.end()
})