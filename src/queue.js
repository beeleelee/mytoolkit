export default class Queue {
  data = []
  enqueue(item) {
    this.data.push(item)
    return this
  }
  dequeue() {
    return this.data.shift()
  }
}