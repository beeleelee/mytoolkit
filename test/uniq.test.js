const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  uniq
} = mytoolkit

test('uniq', t => {
  let arr1 = [0, 1, 2, 3, 3, 4, 5, 5, 6, 6]
  t.deepEqual(uniq(arr1), [0, 1, 2, 3, 4, 5, 6])
  t.deepEqual(uniq([{ x: 1 }, { x: 2 }, { x: 2 }, { x: 3 }, { x: 4 }, { x: 4 }]), [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }])
  t.deepEqual(uniq([{ x: 1 }, { x: 2 }, { x: 2, y: 9 }, { x: 3 }, { x: 4 }, { x: 4 }], (a, b) => a.x == b.x), [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }])
  t.deepEqual(uniq([{ x: 1 }, { x: 2 }, { x: 2, y: 9 }, { x: 3 }, { x: 4 }, { x: 4 }], 'x'), [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }])

  t.end()
})