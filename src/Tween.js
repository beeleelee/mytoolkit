import Clock from './Clock'
import { now } from './utils'

export default class Tween {
  constructor(options){
    this.startTime = 0
    this.currentTime = 0
    this.percent = 0 
    this.setOptions(options)
    this.step = this.step.bind(this)
  }
  setOptions(options = {}){
    let {
      duration = 0
    } = options
    this.duration = duration
    
    this.options = {
      ...this.options,
      ...options
    }
    
  }
  start() {
    this.startTime = this.currentTime = now()
    this.clockId = Clock.add(this.step)
  }
  stop() {
    Clock.remove(this.clockId)
    this.clockId = null
    this.percent = 0
    if(this.options.onEnd){
      this.options.onEnd(this)
    }
    console.log('tween stop')
  }
  step(time) {
    this.currentTime = time
    let span = time - this.startTime
    let leftTime = this.duration - span
    let shouldStop = false
    if (leftTime > 0) {
      //console.log(span / this.duration)
      this.percent = span / this.duration
    } else {
      this.percent = 1
      shouldStop = true 
    }
    if(this.options.onStep){
      this.options.onStep(this, this.percent)
    }
    if(shouldStop){
      this.stop()
    }
  }

}