const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  randInt
} = mytoolkit

test('randInt', t => {
  t.true(randInt(5) < 5)
  t.true(randInt(5) < 5)
  t.true(randInt(5) < 5)

  t.end()
})