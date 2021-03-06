'use strict'

const express = require('express')
const server = express()
const port = 8080

server.use(express.static('public'))
server.set('views', './views')
server.set('view engine', 'pug')

server.get('/', (req, res) => {
  res.render('index')
})

server.get('*', (req, res) => {
  res.redirect('/')
})

server.listen(port, () => {
  console.log('Server is running')
})
