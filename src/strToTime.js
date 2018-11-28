import isSet from './isSet'
import timestamp from './timestamp'
import currentTime from './currentTime'
import { _dateConvert } from './internal/_date'

/**
 * 
 * @param {Sting} dateString 
 * @param {Boolean} seconds - true | false
 * @param {String} format - supported formats
 * 
 * @returns {String} - '1543047456700'
 */
export function strToTime(dateString, format, seconds) {
  if(!isSet(dateString)){
    return seconds ? timestamp() : currentTime()
  }
  return _dateConvert(dateString, seconds ? 'seconds' : 'miniseconds', format)
}

export default strToTime 