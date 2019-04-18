const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  sample1
} = mytoolkit

test('sample1', t => {
  const list = [1, 2, 3, 4, 5]
  t.true(list.includes(sample1(list)))

  t.end()
})