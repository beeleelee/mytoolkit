const Deceleration = require('../dist/deceleration').default

new Deceleration({
  velocity: 1,
  onStep: d => console.log(d)
}).start()