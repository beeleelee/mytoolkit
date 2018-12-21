const test = require('tape')
require('browser-env')()
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  batchSetStyle
} = mytoolkit

test('batchSetStyle', t => {
  let div = document.createElement('div')
  batchSetStyle(div, 'height', '10')
  t.is(div.style.height, '')
  batchSetStyle(div, 'tranform', 'translate3d(0,0,0)')
  t.is(div.style.transform, undefined)
  setTimeout(() => {
    t.is(div.style.height, '10px')
    t.is(div.style.transform, 'translate3d(0,0,0)')
  }, 1)

  t.end()
})