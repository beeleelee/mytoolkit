/**
 * 
 * @param {Number|String} uint - unsigned int
 * @return (true | false)
 */
export function isUInt (uint) {
  return /^\d+$/.test(uint)
}

export default isUInt