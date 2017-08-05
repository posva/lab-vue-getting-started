const emptyNodes = document.querySelectorAll('nonexistant')
window.$$ = function $$ (selector) {
  const els = document.querySelectorAll(selector)
  const innerEls = window.app.$el.querySelectorAll(selector)
  const fn = innerEls.length
          ? el => innerEls.find(el)
          : el => window.app.$el === el
  const found = Array.from(els).filter(fn)
  return found.length
    ? found
    : emptyNodes
}

window.$ = function $ (selector) {
  const els = document.querySelectorAll(selector)
  const innerEl = window.app.$el.querySelector(selector)
  const fn = innerEl
          ? el => el === innerEl
          : el => el === window.app.$el
  // Allow should chaining for tests
  return Array.from(els).find(fn) || emptyNodes
}
