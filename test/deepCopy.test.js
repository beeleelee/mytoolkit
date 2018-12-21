const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  deepCopy
} = mytoolkit 

test('deepCopy', t => {
  let obj1 = {a: 1, b: 2}
  let obj2 = deepCopy(obj1)
  t.not(obj1, obj2)
  t.deepEqual(obj1, obj2)
  let arr1 = [1, 2, 3]
  let arr2 = deepCopy(arr1)
  t.not(arr1, arr2)
  t.deepEqual(arr1, arr2)
})