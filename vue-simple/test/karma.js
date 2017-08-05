import './common'
import Vue from 'vue'
import { resolve } from 'path'

function extractApp (html) {
  const template = document.createElement('template')
  template.innerHTML = html
  return template.content.getElementById('app')
}

window.Vue = Vue

const html = require('page')
document.body.appendChild(extractApp(html))
require('app')
