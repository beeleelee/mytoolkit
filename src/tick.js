import currentTime from './currentTime'

const nextFrame = (function () {
  if(typeof window !== 'undefined'){
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame
  }
  return func => setTimeout(func, 1000 / 60)
})()

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
    let time = currentTime()
    keys.forEach(key => {
      subscribers[key](time)
    })
    nextFrame(tick)
    isTicking = true
  }
}
export const _tick = {
  add,
  remove 
}

export default _tick