window.onload = () => {
  // create a div where mocha can add its stuff
  const mochaDiv = document.createElement('DIV')
  mochaDiv.id = 'mocha'
  document.body.appendChild(mochaDiv)

  // window.should()
  // window.chai.use(chaiDom)
  window.should = chai.should()
  window.mocha.ui('bdd')

  const emptyNodes = document.querySelectorAll('nonexistant')
  const app = document.querySelector('#app')
  window.$$ = function $$ (selector) {
    const els = document.querySelectorAll(selector)
    const innerEls = app.querySelectorAll(selector)
    const fn = innerEls.length
            ? el => innerEls.find(el)
            : el => app === el
    const found = Array.from(els).filter(fn)
    return found.length
      ? found
      : emptyNodes
  }

  window.$ = function $ (selector) {
    const els = document.querySelectorAll(selector)
    const innerEl = app.querySelector(selector)
    const fn = innerEl
            ? el => el === innerEl
            : el => el === app
    // Allow should chaining for tests
    return Array.from(els).find(fn) || emptyNodes
  }

  describe('Hello World', () => {
    it('display Hello Vue', () => {
      $('p').should.have.text('Hello Vue')
    })
  })

  window.mocha.run()
}
