import test from 'ava'
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  currentTime
} = mytoolkit 

test('currentTime', t => {
  console.log(currentTime())
  t.pass()
})