import test from 'ava'
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  delay
} = mytoolkit

test('delay', t => {
  let delayFunc = (a, b) => {
    t.is(a, 'a')
    t.is(b, 'b')
  }
  let error1 = t.throws(() => {
    delay()
  }, TypeError)
  t.is(error1.message, 'unexpected type of Undefined')
  let error2 = t.throws(() => {
    delay(() => { }, 'a')
  })
  t.is(error2.message, 'unexpected type of String')
  delay(delayFunc, 0, 'a', 'b')
})