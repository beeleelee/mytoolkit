import Clock from './Clock'
import { now } from './utils'

const noop = () => { }
export default class Tween {
  constructor({
    duration = 0,
    render,
    target
  }) {
    this.duration = duration
    this.startTime = 0
    this.currentTime = 0
    this.render = render || noop
    this.step = this.step.bind(this)
  }
  start() {
    this.startTime = this.currentTime = now()
    this.clockId = Clock.add(this.step)
  }
  stop() {
    Clock.remove(this.clockId)
    this.clockId = null
    console.log('tween stop')
  }
  step(time) {
    this.currentTime = time
    let span = time - this.startTime
    let leftTime = this.duration - span
    let percent = 0
    if (leftTime > 0) {
      //console.log(span / this.duration)
      percent = span / this.duration
    } else {
      percent = 1
      this.stop()
    }
    return percent
  }

}