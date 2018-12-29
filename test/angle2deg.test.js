const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  angle2deg
} = mytoolkit

test('angle2deg', t => {
  t.is(angle2deg(Math.PI), 180)

  t.end()
})