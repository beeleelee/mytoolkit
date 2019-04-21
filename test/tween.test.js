const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  Tween,
  typeOf,
  interpolateNumber,
} = mytoolkit

const wait = time => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time)
    }, time)
  })
}

test('new Tween(options) has default settings', t => {
  let tween = new Tween()

  t.is(tween.startTime, 0)
  t.is(tween.currentTime, 0)
  t.is(tween.percent, 0)
  t.is(tween.clockId, null)
  t.is(tween.pausedTime, null)
  t.is(tween.duration, 0)
  t.is(typeOf(tween.ease), 'Function')
  t.end()
})

test('new Tween(options) can set options', t => {
  let tween = new Tween({
    duration: 500,
    onStep: (t, p) => { }
  })
  t.is(tween.duration, 500)
  t.is(typeOf(tween.options.onStep), 'Function')
  t.end()
})

test('tween can be paused', async t => {
  let tween = new Tween({
    duration: 1000,
    onStep: (t, p) => {
      //console.log(p)
    },
    onPause: t => {
      //console.log(t)
    },
    onEnd: t => {
      //console.log(t)
    }
  }).start()
  t.is(tween.pausedTime, null)
  await wait(100)
  tween.pause()
  t.true(tween.pausedTime)

  t.end()
})

test('tween can be delayed', async t => {
  let tweenValue = 0
  let interpolate = interpolateNumber(0, 100)
  let tween = new Tween({
    duration: 1000,
    delay: 1000,
    onStep: (t, p) => {
      tweenValue = interpolate(p)
    },
    onPause: t => {
      //console.log(t)
    },
    onEnd: t => {
      tweenValue = interpolate(1)
    }
  }).start()
  await wait(100)
  t.is(tweenValue, 0)
  await wait(1000)
  t.true(tweenValue > 0)
  await wait(1000)
  t.is(tweenValue, 100)

  t.end()
})
