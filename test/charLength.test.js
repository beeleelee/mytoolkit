const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  charLength
} = mytoolkit

test('charLength', t => {
  t.is(charLength('a'), 1)
  t.is(charLength('你好，世界！'), 18)
  t.is(charLength('abc力'), 6)

  t.end()
})