const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  obj2qs,
} = mytoolkit

test('obj2qs', t => {
  let a = { name: 'alex', phone: 123456 }
  t.is(obj2qs(a), 'name=alex&phone=123456')

  t.end()
})