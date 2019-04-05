import tick from './tick'
import Tween from './tween'
import Deceleration from './deceleration'
import Queue from './queue'
import { _padStart as padStart, _padEnd as padEnd } from './internal/_pad'

export * from './base'
export * from './array'
export * from './object'
export * from './func'
export * from './string'
export * from './utils'
export * from './dom'
export * from './regions'
export * from './draw'

export {
  Tween,
  Deceleration,
  Queue,
  tick,
  padStart,
  padEnd,
}