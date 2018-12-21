import test from 'ava'
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  Tween
} = mytoolkit

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