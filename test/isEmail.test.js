const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  isEmail
} = mytoolkit 

test('isEmail', t => {
  t.true(isEmail('beeleelee@outlook.com'))
  t.false(isEmail('beeleelee'))
})