const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  quickSort,
  shuffle,
  currentTime,
} = mytoolkit

test('quickSort', t => {
  let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let b = [0, 4, 1, 5, 7, 6, 2, 9, 3, 8]
  let c = [9, 5, 8, 0, 4, 1, 6, 3, 7, 2]

  t.deepEqual(quickSort(a), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  t.deepEqual(quickSort(b), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  t.deepEqual(quickSort(c), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

  let d = Array.from({ length: 10000 }, (_, i) => i)
  console.log('start time ' + currentTime())
  let shuffledD = shuffle(d)
  console.log('after shuffled ' + currentTime())
  let sortedD = quickSort(shuffledD)
  console.log('after sorted ' + currentTime())
  t.deepEqual(sortedD, d)
  console.log('after test ' + currentTime())
  t.end()
})