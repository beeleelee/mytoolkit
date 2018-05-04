import { now } from './utils'

const nextFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
const subscribers = {}
let id = 0, isTicking = false

const getId = () => id++
const add = func => {
  let key = `clock_${getId()}`
  subscribers[key] = func
  if (!isTicking) {
    tick()
  }
  return key
}
const remove = id => {
  if (subscribers[id]) {
    delete subscribers[id]
  }
}
const tick = () => {
  let keys = Object.keys(subscribers)
  if (keys.length === 0) {
    isTicking = false
  } else {
    let time = now()
    keys.forEach(key => {
      subscribers[key](time)
    })
    nextFrame(tick)
    isTicking = true
  }
}


export default {
  add,
  remove
}