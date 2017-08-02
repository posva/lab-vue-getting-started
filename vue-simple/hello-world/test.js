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
  window.$$ = function $$ (selector) {
    const els = document.querySelectorAll(selector)
    const innerEls = app.$el.querySelectorAll(selector)
    const fn = innerEls.length
            ? el => innerEls.find(el)
            : el => app.$el === el
    const found = Array.from(els).filter(fn)
    return found.length
      ? found
      : emptyNodes
  }

  window.$ = function $ (selector) {
    const els = document.querySelectorAll(selector)
    const innerEl = app.$el.querySelector(selector)
    const fn = innerEl
            ? el => el === innerEl
            : el => el === app.$el
    // Allow should chaining for tests
    return Array.from(els).find(fn) || emptyNodes
  }

  describe('Hello World', () => {
    it('display Hello Vue', () => {
      $('p').should.have.text('Hello Vue')
    })

    it('has a custom name property', () => {
      should.exist(app.name)
    })

    it('says "Hi ___"', () => {
      app.$el.should.contain.text('Hi ' + app.name)
    })
  })

  app.$nextTick(() => {
    window.mocha.run()
  })
}
