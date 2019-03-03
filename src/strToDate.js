import { isSet } from './is'
import { _dateConvert } from './internal/_date'
/**
 * 
 * @param {String} dateString 
 * @param {String} format 
 * 
 * @returns {Date} - instance of Date
 */
export function strToDate(dateString, format) {
  if(!isSet(dateString)){
    return new Date()
  }
  return _dateConvert(dateString, 'date', format)
}

export default strToDate