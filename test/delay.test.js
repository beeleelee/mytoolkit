const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  delay
} = mytoolkit

test('delay', t => {
  let delayFunc = (a, b) => {
    t.is(a, 'a')
    t.is(b, 'b')
  }

  delay(delayFunc, 0, 'a', 'b')

  t.end()
})