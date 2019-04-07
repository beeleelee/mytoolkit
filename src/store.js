import {
  isString,
  isObject,
  isArray,
} from './base'
import {
  encodeJSON,
  decodeJSON,
} from './utils'

let sessStore = null

function getSessStore() {
  if (sessStore) {
    return sessStore
  }
  if (typeof window.sessionStorage !== 'undefined') {
    sessStore = window.sessionStorage
  }
  return sessStore
}

export const sessionStore = {
  get(key) {
    const store = getSessStore()
    if (!store) return ''

    let value = store.getItem(key) || ''
    return decodeJSON(value)
  },
  set(key, value) {
    const store = getSessStore()
    if (!store) return

    if (isArray(value) || isObject(value)) {
      value = encodeJSON(value)
    }

    store.setItem(key, value)
  },
  remove(key) {
    const store = getSessStore()
    if (!store) return

    store.removeItem(key)
  },
  clear() {
    const store = getSessStore()
    if (!store) return

    store.clear()
  }
}

