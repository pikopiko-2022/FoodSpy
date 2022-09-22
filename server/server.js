const express = require('express')
const path = require('path')

const homeRoutes = require('./routes/home')
const listRoutes = require('./routes/list')
const items = require('./routes/item')
const itemData = require('./routes/itemData')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/home', homeRoutes)
server.use('/api/v1/list', listRoutes)
server.use('/api/v1/items', items)
server.use('/api/v1/item-data', itemData)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
