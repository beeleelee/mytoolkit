const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  contains,
} = mytoolkit

test('contains', t => {
  let tlist = [1, 2, 4, 5]
  t.true(contains(tlist, 2))
  t.false(contains(tlist, 6))
  let tlist2 = [
    { name: 'alex' },
    { name: 'leo' },
    { name: 'felix' },
  ]
  t.true(contains(tlist2, item => item.name == 'alex'))
  t.false(contains(tlist2, item => item.name === 'lily'))
  t.end()
})