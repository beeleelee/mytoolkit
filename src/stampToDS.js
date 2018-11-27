import timestamp from './timestamp'
import { _dateConvert } from './internal/_date'

/**
 * 
 * @param {String|Number} stamp - timestamp, maybe miniseconds
 * @param {String} [format] - supported format as follow:
 *                          'yyyy-mm-dd hh:mm:ss'
 *                          'yyyy-mm-dd hh:mm'
 *                          'yyyy-mm-dd'
 *                          'yyyy-mm'
 *                          'hh:mm:ss'
 *                          'hh:mm'
 * @returns {String} date string
 */
export function stampToDS (stamp = timestamp(), format = 'yyyy-mm-dd hh:mm') {
  return _dateConvert(stamp, 'dateString', format)
}

export default stampToDS