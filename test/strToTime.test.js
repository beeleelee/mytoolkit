import test from 'ava'
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  strToTime
} = mytoolkit 

test('timestamp', t => {
  let str1 = '2018-11-24 16:16:52'
  let str2 = '2018-11-24 16:17'
  let str3 = '2018-11-25'
  t.is(strToTime(str1, 'yyyy-mm-dd hh:mm:ss', true), 1543047412)
  t.true(strToTime(str2) <= 1543047456700)
  t.true(strToTime(str2, null, true) <= 1543047456)
  t.true(strToTime(str3, 'yyyy-mm-dd') <= 1543152558701)
})