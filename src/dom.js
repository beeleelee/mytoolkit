import {
  typeOf
} from './base'
import {
  trim,
  dashToCamel,
} from './string'
import { delay } from './func'
import Queue from './queue'
import { nextFrame } from './tick'

let styleKeys = null

/**
 * @ignore
 */
const setSingleStyle = (ele, name, value) => {
  if (!ele || !ele.style) {
    throw new Error('missing HTML node element for setStyle!')
  }
  name = dashToCamel(name)
  name = checkVendorPrefix(name)
  if (typeOf(name) !== 'Undefined' && typeOf(value) !== 'Undefined') {
    ele.style[name] = tryAddPX(name, value)
  }
}

/**
 * @param {HTMLElement} ele - dom element 
 * @param {String} name - the style property name, it also can be an object to set multiple style properties
 * @param {String|Number} value - the value of the style property
 * 
 * @example
 * 
 * setStyle(document.body, 'fontSize', '16px')
 * setStyle(doucment.body, {
 *  backgroundColor: '#ffffff',
 *  minHeight: '100vh'
 * })
 */
export const setStyle = (ele, name, value) => {
  if (typeOf(name) === 'Object') {
    Object.keys(name)
      .map(n => {
        setSingleStyle(ele, n, name[n])
      })
  } else {
    setSingleStyle(ele, name, value)
  }
}

/**
 * @ignore
 */
function checkVendorPrefix(name) {
  let styleKeys = getStyleKeys()

  return styleKeys[name] || name
}

/**
 * @ignore
 */
function getStyleKeys() {
  if (styleKeys !== null) return styleKeys

  if (typeof document === 'undefined') {
    throw new Error('missing document!')
  }

  let computedStyles = Array.from(getComputedStyle(document.body))
  let keys = Object.keys(computedStyles).filter(
    key => /^webkit(transform|transition)$/i.test(key)
  )
  styleKeys = keys.reduce((res, key) => {
    let name = key.replace(/^webkit(\w)/, (a, s) => s.toLowerCase())
    res[name] = key
    return res
  }, {})

  return styleKeys
}

const properties = [
  'width',
  'height',
  'minWidth',
  'maxWidth',
  'minHeight',
  'maxHeight',
  'left',
  'top',
  'right',
  'bottom',
  'borderWidth',
  'borderTopWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderRightWidth',
  'borderRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderSpacing',
  'fontSize',
  'letterSpacing',
  'margin',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'padding',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
]
/**
 * @ignore 
 */
function tryAddPX(name, value) {
  // check if name in the property list which can add px, if not return value 
  if (properties.indexOf(name) == -1) {
    return value
  }

  let cValue = trim(value) - 0

  // only add px to numeric value
  if (typeOf(cValue) !== 'Number') {
    return value
  }

  return `${cValue}px`
}

/**
 * @desc set styles in batch style. It merge separate style setting into a task and execute it as soon as possible.
 * 
 * @todo 
 *  1. async set style call by delay
 *  2. merge separate call into a task
 *  3. lock the style setting when doing a task, put incoming task into a queue
 *  4. use tick as setting frame, check remaining task at every frame
 */

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

let remSetuped = false

export function rem({
  designWidth = 750,
  designDPR = 1,
  rem2px = 100,
  bodyFontSize = 14,
  win,
  doc
}) {
  let documentElement = doc.documentElement
  const dpr = () => win.devicePixelRatio || 1
  let expectedWidth = designWidth * designDPR
  let expectedDocumentElementFontSize = rem2px

  !remSetuped && setBodyFontSize()

  function setDocumentElementFontSize() {
    let adaptedWidth = documentElement.clientWidth * dpr()
    let adaptedDocumentElementFontSize = expectedDocumentElementFontSize * adaptedWidth / expectedWidth
    setStyle(documentElement, 'font-size', adaptedDocumentElementFontSize)
    console.log(`dpr: ${dpr()}, expectedWidth: ${expectedWidth}, deFontSize: ${expectedDocumentElementFontSize}, adaptedWidth: ${adaptedWidth}, adaptedFontSize: ${adaptedDocumentElementFontSize}`)
  }

  function setBodyFontSize() {
    if (doc.body) {
      setStyle(doc.body, 'font-size', bodyFontSize * dpr())
    }
    else {
      doc.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  if (!remSetuped) {
    setDocumentElementFontSize()

    // reset rem unit on page resize
    window.addEventListener('resize', setDocumentElementFontSize)
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        setDocumentElementFontSize()
      }
    })
  }

  remSetuped = true
}
