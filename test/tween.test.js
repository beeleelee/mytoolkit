import test from 'ava'
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  typeOf,
  Tween 
} = mytoolkit 

test('Tween', t => {
  let tween = new Tween({
    duration: 500,
    onStep: (tw, p) => {
      console.log(p)
    }
  })
  tween.start()
  t.pass()
})