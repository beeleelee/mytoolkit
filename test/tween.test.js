import test from 'ava'
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  Tween
} = mytoolkit

test('Tween', t => {
  let tween = new Tween({
    duration: 500,
    onStep: () => {

    }
  })
  tween.start()
  t.pass()
})