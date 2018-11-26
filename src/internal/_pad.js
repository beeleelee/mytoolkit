import typeOf from '../typeOf'

const padStartProto = String.prototype.padStart
const padEndProto = String.prototype.padEnd 

export function _padStart (target, length, padString) {
  return _pad('start', target, length, padString)
}

export function _padEnd (target, length, padString) {
  return _pad('start', target, length, padString)
}

function _pad (type, target, length, padString) {
  let proto = type == 'start' ? padStartProto : padEndProto
  if (typeOf(proto) === 'Function') {
    return proto.call(target, length,  padString)
  }
  target = String(target)
  let targetLength = target.length 
  if(targetLength - length >= 0){
    return target
  }
  padString = String(padString)
  let padLength = length - targetLength
  let padStringLength = padString.length
  
  return (type === 'start' ? '' : target) + Array.from({length: padLength})
    .map((item, index) => {
      return padString[index % padStringLength]
    }).join('') + (type === 'start' ? target : '') 
}