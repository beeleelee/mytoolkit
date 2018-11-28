import test from 'ava'
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  strToDate,
  typeOf,
} = mytoolkit 

test('timestamp', t => {
  let str1 = '2018-11-24 16:16:52'
  let str2 = '2018-11-24 16:17'
  let str3 = '2018-11-25'
  
  let date1 = strToDate(str1, 'yyyy-mm-dd hh:mm:ss')
  let date2 = strToDate(str2) 
  let date3 = strToDate(str3, 'yyyy-mm-dd')
  t.is(typeOf(date1), 'Date')
  t.is(typeOf(date2), 'Date')
  t.is(typeOf(date3), 'Date')
  t.is(date1.getFullYear(), 2018)
  t.is(date2.getMinutes(), 17)
  t.is(date2.getMonth(), 10)
  t.is(date3.getDate(), 25)
})