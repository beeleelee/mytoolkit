import test from 'ava'
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  randInt
} = mytoolkit 

test('randInt', t => {
  console.log(randInt(5))
  t.true(randInt(5) < 5)
  t.true(randInt(5) < 5)
  t.true(randInt(5) < 5)
})