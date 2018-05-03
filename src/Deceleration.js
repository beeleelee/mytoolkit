import { now } from './utils'
import Clock from './Clock'

export default class Deceleration {
  constructor(options) {
    this.step = this.step.bind(this)
    this.setOptions(options)
  }
  setOptions(options = {}) {
    let {
      velocity,
      resistance = 0.001
    } = options
    if (velocity) {
      this.velocity = velocity
    }
    this.resistance = resistance
    this.options = {
      ...this.options,
      ...options
    }
    return this
  }
  start() {
    this.startTime = this.prevTime = this.currentTime = now()
    this.sign = this.velocity > 0 ? 1 : -1
    this.prevV = Math.abs(this.velocity)
    this.clockId = Clock.add(this.step)

    return this
  }
  stop() {
    Clock.remove(this.clockId)
    this.clockId = null
    console.log('deceleration stop')
    if (this.options.onEnd) {
      this.options.onEnd()
    }

    return this
  }
  step(time) {
    this.currentTime = time
    let span = time - this.prevTime
    let v = this.prevV
    if (v <= 0) {
      console.log('will stop dec', v)
      v = 0
      this.stop()
    } else {

      //console.log(span)
      let displacement = v * span - (this.resistance * Math.pow(span, 2)) / 2

      console.log(this.sign * displacement, v)
      if (this.options.onStep) {
        this.options.onStep(this.sign * displacement)
      }

      this.prevTime = this.currentTime
      this.prevV = this.prevV - this.resistance * span
    }
  }
}