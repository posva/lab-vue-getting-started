const { resolve } = require('path')
const webpackConfig = require('./webpack.config.js')

const file = resolve('./test.js')

// no need for app entry during tests
delete webpackConfig.entry
delete webpackConfig.plugins

module.exports = config => {
  config.set({
    browsers: ['Chrome_no_sandbox'],
    customLaunchers: {
      Chrome_no_sandbox: {
        base: 'Chrome',
        flags: [
          '--no-sandbox',
          // '--headless',
          // '--disable-gpu',
        ]
      }
    },
    frameworks: ['mocha', 'chai-dom', 'sinon-chai'],
    reporters: ['spec'],
    files: [
      file
    ],
    preprocessors: {
      [file]: ['webpack', 'sourcemap'],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
  })
}
