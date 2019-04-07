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

function isJSONStr(str) {
  return /^[{\]]|[{\]]$/.test(str)
}

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
    return isJSONStr(value) ? JSON.parse(value) : value
  },
  set(key, value) {
    const store = getSessStore()
    if (!store) return



  },
  remove(key) {

  },
  clear() {

  }
}

