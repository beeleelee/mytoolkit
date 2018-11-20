import test from 'ava'
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  Deceleration 
} = mytoolkit 

test('Deceleration', t => {
  let dec = new Deceleration({
    velocity: 1,
    onStep: m => {
      console.log(m)
    }
  })
  dec.start()
  t.pass()
})