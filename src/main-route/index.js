'use strict'

const page = require('page')
const template = require('./template')
const empty = require('empty-element')
require('./animations/slides/slides-animations')

page('/', function () {
  let main = document.getElementById('super-container')
  empty(main).appendChild(template)
  // scene()
})