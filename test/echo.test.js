import test from 'ava'
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  echo
} = mytoolkit

test('echo', t => {
  t.is(echo(1), 1)
  t.is(echo('a'), 'a')
  let b = {}
  t.is(echo(b), b)
})