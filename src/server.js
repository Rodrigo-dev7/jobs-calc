const express = require('express')
const server = express()
const routes = require('./routes')

// habilitar arquivos stactic
server.use(express.static('public'))

// routes
server.use(routes)

server.listen(3001, () => console.log('Running...'))

