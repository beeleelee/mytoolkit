import typeOf from '../typeOf'
import currentTime from '../currentTime'
import padZero from '../padZero'
import isUInt from '../isUInt'

const supportedFormats = [
  'yyyy-mm-dd hh:mm:ss',
  'yyyy-mm-dd hh:mm',
  'yyyy-mm-dd',
  'yyyy-mm',
  'hh:mm:ss',
  'hh:mm'
]
const supportedTargetTypes = [
  'seconds',
  'miniseconds',
  'date',
  'dateString',
]

/**
 * the converter of date
 * 
 */

/**
 * 
 * @param {String|Number|Date} from - input to be convert
 * @param {String} targetType - output types (seconds|miniseconds|date|dateString)
 * @param {String} [format] - supported format as follow:
 *                          'yyyy-mm-dd hh:mm:ss'
 *                          'yyyy-mm-dd hh:mm'
 *                          'yyyy-mm-dd'
 *                          'yyyy-mm'
 *                          'hh:mm:ss'
 *                          'hh:mm'
 */

export function _dateConvert(from = currentTime(), targetType = 'dateString', format = 'yyyy-mm-dd hh:mm') {
  let fromType = typeOf(from)
  switch(fromType){
  case 'String':
  case 'Number':
    if(isUInt(from)){
      return secondsConvert(ensureMiniseconds(from), targetType, format)
    }
    return DSConvert(from, targetType)
  case 'Date':
    return DConvert(from, targetType, format)
  default:
    throw new TypeError(`_dateConvert - unexpected type of ${fromType}`)   
  }
}

function secondsConvert(from, targetType, format) {
  if(targetType !== 'date' || targetType !== 'dateString'){
    throw new TypeError(`unexpected targetType: ${targetType}`)
  }

  let d = new Date()
  d.setTime(from)
  if(targetType === 'date'){
    return d 
  }

  return toDS(d, format)
}

function DSConvert(from, targetType) {
  if (!supportedTargetTypes.includes(targetType)) {
    throw new TypeError(`unexpected targetType: ${targetType}`)
  }
  if(targetType === 'dateString'){
    return from 
  }
  let reg1 = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/
  let reg2 = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})$/
  let reg3 = /^(\d{4})-(\d{2})-(\d{2})$/
  let reg4 = /^(\d{4})-(\d{2})$/
  let reg5 = /^(\d{2}):(\d{2}):(\d{2})$/
  let reg6 = /^(\d{2}):(\d{2})$/
  let today = new Date()
  let DS = String(from)
  let match, d
  if(match = DS.match(reg1)){
    d = new Date(match[1], match[2] - 1, match[3], match[4], match[5], match[6])
  }
  if(match = DS.match(reg2)){
    d = new Date(match[1], match[2] - 1, match[3], match[4], match[5])
  }
  if(match = DS.match(reg3)){
    d = new Date(match[1], match[2] - 1, match[3])
  }
  if(match = DS.match(reg4)){
    d = new Date(match[1], match[2] - 1)
  }
  if(match = DS.match(reg5)){
    d = new Date(today.getFullYear(), today.getMonth(), today.getDate(), match[1], match[2], match[3])
  }
  if(match = DS.match(reg6)){
    d = new Date(today.getFullYear(), today.getMonth(), today.getDate(), match[1], match[2])
  }
  if(!d){
    throw new Error('unexpected input!')
  }
  if(targetType === 'seconds'){
    return Math.round(d.getTime() / 1000)
  }
  if(targetType === 'miniseconds'){
    return d.getTime()
  }
  return d 
}

function DConvert(from, targetType, format) {
  switch(targetType) {
  case 'seconds':
    return Math.round(from.getTime() / 1000)
  case 'miniseconds':
    return from.getTime()
  case 'dateString':
    return toDS(from, format) 
  default:
    throw new TypeError(`_dateConvert - unexpected type of ${targetType}`)
  }
}

function ensureMiniseconds(number) {
  if((number + '').length === 10){
    return number * 1000
  }
  return number
}

function toDS(d, format) {
  if(typeOf(d) !== 'Date'){
    throw new TypeError(`unexpected type: ${typeOf(d)}`)
  }
  if (!supportedFormats.includes(String(format).toLowerCase())) {
    throw new TypeError(`unexpected format! suported formats: \n${supportedFormats.join('\n')}`)
  }

  let year, month, date, hours, minutes, seconds,
    dateString = format
  
  year = d.getFullYear()
  month = d.getMonth() + 1
  date = d.getDate()
  hours = d.getHours()
  minutes = d.getMinutes()
  seconds = d.getSeconds()

  dateString = dateString.replace(/yyyy/i, year)
  dateString = dateString.replace(/-mm/i, `-${padZero(month)}`)
  dateString = dateString.replace(/dd/i, padZero(date))
  dateString = dateString.replace(/hh/i, padZero(hours))
  dateString = dateString.replace(/:mm/i, `:${padZero(minutes)}`)
  dateString = dateString.replace(/ss/i, padZero(seconds))

  return dateString
}