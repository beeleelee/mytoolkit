import timestamp from './timestamp'
import { _dateConvert } from './internal/_date'

/**
 * 
 * @param {String|Number} time - timestamp, maybe miniseconds
 * @param {String} [format] - supported format as follow:
 *                          'yyyy-mm-dd hh:mm:ss'
 *                          'yyyy-mm-dd hh:mm'
 *                          'yyyy-mm-dd'
 *                          'yyyy-mm'
 *                          'hh:mm:ss'
 *                          'hh:mm'
 * @returns {String} - date string 2018-11-28, 2018-11-28 14:03:23, 2000-01-01 01:01
 */
export function timeToStr (time = timestamp(), format = 'yyyy-mm-dd hh:mm') {
  return _dateConvert(time, 'dateString', format)
}

export default timeToStr