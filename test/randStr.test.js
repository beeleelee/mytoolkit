const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  randStr
} = mytoolkit 

test('randStr', t => {
  console.log(randStr())
  t.true(randStr(9).length === 9)
  t.pass()
})