const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  Deceleration
} = mytoolkit

test('Deceleration', t => {
  let dec = new Deceleration({
    velocity: 1,
    onStep: m => {
      //console.log(m)
    }
  })
  t.is(dec.velocity, 1)
  t.is(dec.resistance, 0.001)
  dec.start()
  t.pass()

  t.end()
})