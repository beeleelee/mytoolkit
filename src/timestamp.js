import currentTime from './currentTime'

export function timestamp() {
  return Math.round(currentTime() / 1000)
}

export default timestamp 