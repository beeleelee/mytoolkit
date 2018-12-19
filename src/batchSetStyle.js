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
import tick from './tick'

const tasks = new Queue()
let delayHandle = null
let doingTask = false

export function batchSetStyle(...args) {
  if (delayHandle) {
    clearTimeout(delayHandle)
    delayHandle = null
  }
  tasks.enqueue(args)
  delayHandle = delay(doTask, 0)
}

function doTask() {
  doingTask = true
  let task
  while (task = tasks.dequeue()) {
    try {
      setStyle(...task)
    } catch (error) {
      console.log(error)
    }
  }
  doingTask = false
}

export default batchSetStyle