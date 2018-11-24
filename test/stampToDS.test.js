import test from 'ava'
const mytoolkit = require('../dist/mytoolkit.cjs')
const {
  stampToDS
} = mytoolkit 

test('timestamp', t => {
  let time1 = 1543047412 
  let time2 = 1543047456700 
  t.is(stampToDS(time1), '2018-11-24 16:52')
  t.is(stampToDS(time2), '2018-11-24 16:36')
})