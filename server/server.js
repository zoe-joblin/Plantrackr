const path = require('path')
const express = require('express')

const plantRoutes = require('./routes/plants')
const speciesRoutes = require('./routes/species')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/plants', plantRoutes)
server.use('/api/v1/species', speciesRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server
