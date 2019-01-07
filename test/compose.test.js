const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  compose
} = mytoolkit

test('compose', t => {
  const fn1 = (a) => {
    t.is(a, 12)

    return a - 1
  }
  const fn2 = (a) => {
    t.is(a, 6)
    return a * 2
  }
  const fn3 = (a, b, c) => {
    t.is(a, 1)
    t.is(b, 2)
    t.is(c, 3)
    return a + b + c
  }
  const c = compose(fn1, fn2, fn3)
  t.is(c(1, 2, 3), 11)
  t.end()
})