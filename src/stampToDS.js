import timestamp from './timestamp'
import padZero from './padZero'

const supportedFormats = [
  'yyyy-mm-dd hh:mm:ss',
  'yyyy-mm-dd hh:mm',
  'yyyy-mm-dd',
  'hh:mm:ss',
  'hh:mm'
]
/**
 * 
 * @param {String|Number} stamp - timestamp, maybe miniseconds
 * @param {String} format - supported format as follow:
 *                          'yyyy-mm-dd hh:mm:ss'
 *                          'yyyy-mm-dd hh:mm'
 *                          'yyyy-mm-dd'
 *                          'hh:mm:ss'
 *                          'hh:mm'
 * @returns {String} date string
 */
export function stampToDS (stamp = timestamp(), format = 'yyyy-mm-dd hh:mm') {
  if(!supportedFormats.includes(String(format).toLowerCase())){
    throw new TypeError(`stampToDS - invalid format! suported formats: \n${supportedFormats.join('\n')}`)
  }

  let year, month, date, hours, minutes, seconds, time = stamp, d = new Date(), dateString = format
  if((time + '').length === 10){
    time *= 1000
  }
  d.setTime(time)
  year = d.getFullYear()
  month = d.getMonth() + 1 
  date = d.getDate()
  hours = d.getHours()
  minutes = d.getMinutes()
  seconds = d.getSeconds()

  dateString = dateString.replace(/yyyy/i, year)
  dateString = dateString.replace(/mm(?=-)/i, padZero(month))
  dateString = dateString.replace(/dd/i, padZero(date))
  dateString = dateString.replace(/hh/i, padZero(hours))
  dateString = dateString.replace(/:mm/i, `:${padZero(minutes)}`)
  dateString = dateString.replace(/ss/i, padZero(seconds))

  return dateString
}

export default stampToDS