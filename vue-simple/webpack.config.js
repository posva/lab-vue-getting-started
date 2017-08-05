const webpack = require('webpack')
const { join, resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    app: './test.js',
  },

  output: {
    path: resolve('./dist'),
    filename: '[name].js',
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      test: resolve('./test'),
      app: resolve('./index'),
      page: resolve('./index.html'),
    }
  },
  devServer: {
    inline: true,
    port: 8080,
  },
  resolveLoader: {
    modules: [
      join(__dirname, 'node_modules'),
    ],
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loaders: ['raw-loader'],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './index.js'
    }]),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
  ],
  devtool: '#inline-source-map',
}
