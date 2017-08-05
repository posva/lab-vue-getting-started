import '../test'

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
