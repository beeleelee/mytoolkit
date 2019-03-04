import { isSet } from './base'
import {
  timestamp,
  currentTime,
} from './utils'
import { _dateConvert } from './internal/_date'

/**
 * 
 * @param {Sting} dateString 
 * @param {String} format - supported formats
 * @param {Boolean} seconds - true | false
 * 
 * @returns {String} - '1543047456700'
 */
export function strToTime(dateString, format, seconds) {
  if (!isSet(dateString)) {
    return seconds ? timestamp() : currentTime()
  }
  return _dateConvert(dateString, seconds ? 'seconds' : 'miniseconds', format)
}

export default strToTime 