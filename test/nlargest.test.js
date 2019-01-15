const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  nlargest,
} = mytoolkit

test('nlargest', t => {
  const a = [3, 4, 98, 0, 1, 32, 24, 8]
  t.deepEqual(nlargest(a, 1), [98])
  t.deepEqual(nlargest(a, 3), [98, 32, 24])
  t.end()
})