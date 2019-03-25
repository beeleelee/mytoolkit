const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  reverse
} = mytoolkit

test('reverse', t => {
  t.is(reverse('test string reverse'), 'esrever gnirts tset')
  t.deepEqual(reverse([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1])
  t.deepEqual(reverse({ a: 2, b: 3, c: 4 }), { 2: 'a', 3: 'b', 4: 'c' })

  t.end()
})