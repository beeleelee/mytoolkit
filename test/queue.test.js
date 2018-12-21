const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  Queue
} = mytoolkit

test('queue', t => {
  let q = new Queue()
  t.is(q.dequeue(), undefined)
  q.enqueue(1)
  t.is(q.dequeue(), 1)
  q.enqueue({ a: 2 })
    .enqueue(3)
    .enqueue([4])
    .enqueue(a => a)
  t.deepEqual(q.dequeue(), { a: 2 })
  t.is(q.dequeue(), 3)
  t.deepEqual(q.dequeue(), [4])
  t.is(q.dequeue()(5), 5)

  t.end()
})