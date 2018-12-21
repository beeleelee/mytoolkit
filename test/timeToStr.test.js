const test = require('tape')
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  timeToStr
} = mytoolkit 

test('timestamp', t => {
  let time1 = 1543047412 
  let time2 = 1543047456700 
  let time3 = 1543152558701
  t.is(timeToStr(time1, 'yyyy-mm-dd hh:mm:ss'), '2018-11-24 16:16:52')
  t.is(timeToStr(time2), '2018-11-24 16:17')
  t.is(timeToStr(time3, 'yyyy-mm-dd'), '2018-11-25')
  t.is(timeToStr(time3, 'hh:mm:ss'), '21:29:18')
  t.is(timeToStr(time3, 'hh:mm'), '21:29')
})