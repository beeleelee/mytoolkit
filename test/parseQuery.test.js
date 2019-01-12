const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  parseQuery,
  deepEqual
} = mytoolkit

test('parseQuery', t => {
  const qs1 = 'https://a.com?a=1&b=2&c=3'
  const qs2 = '?name=alex&phone=123456&gender=male'
  const qs3 = 'from=china&to=anywhere'
  t.deepLooseEqual(parseQuery(qs1), { a: 1, b: 2, c: 3 })
  t.true(deepEqual(parseQuery(qs2), { name: 'alex', phone: 123456, gender: 'male' }))
  t.deepEqual(parseQuery(qs3), { from: 'china', to: 'anywhere' })
  t.end()
})