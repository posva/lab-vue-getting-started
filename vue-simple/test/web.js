// code specific to web test
import 'mocha-css'
import 'mocha/mocha.js'
import chai from 'chai'
import chaiDom from 'chai-dom'

const mochaDiv = document.createElement('DIV')
mochaDiv.id = 'mocha'
document.body.appendChild(mochaDiv)

chai.use(chaiDom)
window.should = chai.should()
window.mocha.ui('bdd')

require('./common')

window.app.$nextTick(() => {
  window.mocha.run()
})
