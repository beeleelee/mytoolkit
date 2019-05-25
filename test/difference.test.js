const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  difference
} = mytoolkit

test('differece', t => {
  let arr1 = [0, 1, 2, 3, 4, 5, 6]
  let arr2 = [2, 3, 4, 8, 9]
  t.deepEqual(difference(arr1, arr2), [0, 1, 5, 6])
  t.deepEqual(
    difference(
      [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }, { x: 5 }],
      [{ x: 2 }, { x: 3 }],
      'x'
    ),
    [{ x: 1 }, { x: 4 }, { x: 5 }]
  )
  t.deepEqual(
    difference(
      [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }, { x: 5 }],
      [{ x: 2 }, { x: 3 }],
      (a, b) => a.x == b.x
    ),
    [{ x: 1 }, { x: 4 }, { x: 5 }]
  )
  t.deepEqual(
    difference(
      [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }, { x: 5 }],
      [{ x: 2 }, { x: 3 }],
    ),
    [{ x: 1 }, { x: 4 }, { x: 5 }]
  )

  t.end()
})