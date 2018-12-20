/**
 * @desc set styles in batch style. It merge separate style setting into a task and execute it as soon as possible.
 * 
 * @todo 
 *  1. async set style call by delay
 *  2. merge separate call into a task
 *  3. lock the style setting when doing a task, put incoming task into a queue
 *  4. use tick as setting frame, check remaining task at every frame
 */
import setStyle from './setStyle'
import delay from './delay'
import Queue from './queue'
import { nextFrame } from './tick'

class TaskQueue extends Queue {
  constructor(options) {
    super(options)
    this.waittingTasks = []
    this.doingTask = false
  }
  enqueue(item) {
    if (this.doingTask) {
      this.waittingTasks.push(item)
    } else {
      super.enqueue(item)
    }
    return this
  }
  doTask() {
    if (this.doingTask) return

    this.doingTask = true
    let task
    while (task = tasks.dequeue()) {
      try {
        setStyle(...task)
      } catch (error) {
        console.log(error)
      }
    }
    this.doingTask = false
    if (this.waittingTasks.length > 0) {
      this.mergeTask()
      nextFrame(() => {
        this.doTask()
      })
    }
    return this
  }
  mergeTask() {
    this.data = [...this.data, ...this.waittingTasks]
    return this
  }
}

const tasks = new TaskQueue()
let delayHandle = null

export function batchSetStyle(...args) {
  if (delayHandle) {
    clearTimeout(delayHandle)
    delayHandle = null
  }
  tasks.enqueue(args)
  delayHandle = delay(() => {
    tasks.doTask()
    delayHandle = null
  }, 0)
}

export default batchSetStyle

