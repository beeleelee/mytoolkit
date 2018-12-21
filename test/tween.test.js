import test from 'ava'
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  Tween,
  typeOf
} = mytoolkit

test('new Tween(options) has default settings', t => {
  let tween = new Tween()

  t.is(tween.startTime, 0)
  t.is(tween.currentTime, 0)
  t.is(tween.percent, 0)
  t.is(tween.clockId, null)
  t.is(tween.pausedTime, null)
})
