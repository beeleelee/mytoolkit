Array.prototype.last = function (from) {
  from = from || 1
  if (this.length - from < 0) {
    return this[0]
  }
  return this[this.length - from]
}