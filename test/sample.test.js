const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  sample
} = mytoolkit

test('sample', t => {
  const list = [1, 2, 3, 4, 5]
  let s = sample(list)
  t.true(s.every(inList))
  function inList(i) {
    return list.includes(i)
  }
  t.end()
})