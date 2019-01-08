const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  quickSort,
} = mytoolkit

test('quickSort', t => {
  let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let b = [0, 4, 1, 5, 7, 6, 2, 9, 3, 8]
  let c = [9, 5, 8, 0, 4, 1, 6, 3, 7, 2]
  console.log('=========')
  console.log(quickSort(a))
  console.log('===========')
  t.deepEqual(quickSort(a), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  t.deepEqual(quickSort(b), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  t.deepEqual(quickSort(c), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  t.end()
})