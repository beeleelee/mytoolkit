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


test('Tween can be paused', t => {
  let tween = new Tween({
    duration: 500,
    // onStep: (t, p) => {
    //   console.log(t, p)
    // },
    // onPause: t => {
    //   console.log(t)
    // },
    // onEnd: t => {
    //   console.log(t)
    // }
  })
  tween.start()
  t.is(tween.pausedTime, null)
  setTimeout(() => {
    tween.pause()
    t.true(tween.pausedTime)
  }, 200)
})