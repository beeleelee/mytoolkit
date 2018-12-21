const test = require('tape')
require('browser-env')()
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  setStyle
} = mytoolkit

test('setStyle', t => {
  let div = document.createElement('div')
  setStyle(div, 'height', '10')
  t.is(div.style.height, '10px')
  setStyle(div, 'transform', 'translate3d(0,0,0)')
  t.is(div.style.transform, 'translate3d(0,0,0)')
})