const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  queryJoin,
} = mytoolkit

test('nsmallest', t => {
  t.is(queryJoin('http://example.com?', 'a=1&b=2'), 'http://example.com?a=1&b=2')
  t.is(queryJoin('http://example.com', 'a=1&b=2'), 'http://example.com?a=1&b=2')
  t.is(queryJoin('a=1&b=2', 'c=3&d=4'), 'a=1&b=2&c=3&d=4')
  t.is(queryJoin('a=1&b=2&', 'c=3&d=4'), 'a=1&b=2&c=3&d=4')
  t.is(queryJoin('http://example.com?name=alex', 'gender=1'), 'http://example.com?name=alex&gender=1')
  t.is(queryJoin('http://example.com?name=alex&', 'gender=1'), 'http://example.com?name=alex&gender=1')
  t.end()
})