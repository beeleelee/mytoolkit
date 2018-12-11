import currentTime from './currentTime'

/**
 * @desc - like currentTime but its seconds not miniseconds
 * @returns - seconds since 00:00:00 UTC on January 1, 1970
 */
export function timestamp() {
  return Math.round(currentTime() / 1000)
}

export default timestamp 