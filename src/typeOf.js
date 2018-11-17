export default function typeOf(obj) {
  let objName = Object.prototype.toString.call(obj)
  objName = objName.slice(8, -1)
  if(objName === 'Number' && isNaN(obj)){
    return 'NaN'
  }
  return objName 
}