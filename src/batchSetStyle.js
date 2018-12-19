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
import queue from './queue'

export function batchSetStyle(element, name, value) {

}

export default batchSetStyle