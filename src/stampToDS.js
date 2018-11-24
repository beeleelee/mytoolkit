import timestamp from './timestamp'
import padZero from './padZero'

/**
 * 
 * @param {String|Number} stamp - timestamp, maybe miniseconds
 * @returns {String} date string
 */
export function stampToDS (stamp = timestamp()) {
  let time = stamp, d = new Date(), year, month, date, hours, seconds 
  if((time + '').length === 10){
    time *= 1000
  }
  d.setTime(time)
  year = d.getFullYear()
  month = d.getMonth() + 1 
  date = d.getDate()
  hours = d.getHours()
  seconds = d.getSeconds()

  return `${year}-${padZero(month)}-${padZero(date)} ${padZero(hours)}:${padZero(seconds)}`
}

export default stampToDS