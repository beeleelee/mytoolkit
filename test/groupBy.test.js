const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  groupBy
} = mytoolkit

test('groupBy', t => {
  t.deepEqual(
    groupBy(
      [
        { name: 'a', type: 1 },
        { name: 'b', type: 1 },
        { name: 'c', type: 2 },
        { name: 'd', type: 2 },
        { name: 'e', type: 1 }
      ],
      'type'
    ),
    {
      1: [{ name: 'a', type: 1 }, { name: 'b', type: 1 }, { name: 'e', type: 1 }],
      2: [{ name: 'c', type: 2 }, { name: 'd', type: 2 }]
    }
  )
  t.deepEqual(
    groupBy(
      [
        { name: 'a', type: 1 },
        { name: 'b', type: 1 },
        { name: 'c', type: 2 },
        { name: 'd', type: 2 },
        { name: 'e', type: 1 }
      ],
      item => item.type
    ),
    {
      1: [{ name: 'a', type: 1 }, { name: 'b', type: 1 }, { name: 'e', type: 1 }],
      2: [{ name: 'c', type: 2 }, { name: 'd', type: 2 }]
    }
  )
  t.end()
})