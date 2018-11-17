const Tween = require('../dist/tween').default

new Tween({
  duration: 540,
  onStep: (tween, percent) => console.log(percent)
}).start()