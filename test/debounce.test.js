const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  debounce
} = mytoolkit

test('debounce', t => {
  let num1 = 0
  let num2 = 0
  let wait = 1000
  const count1 = () => num1++
  const count2 = () => num2++

  let d1 = debounce(count1, wait, true)
  let d2 = debounce(count2, wait, false)
  d1()
  d1()
  d1()

  t.is(num1, 1)

  d2()
  d2()
  d2()

  t.is(num2, 0)

  t.end()
})