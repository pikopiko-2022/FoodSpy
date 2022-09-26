const express = require('express')
const path = require('path')

const listRoutes = require('./routes/list')
const priceRoutes = require('./routes/price')
const items = require('./routes/item')
const itemData = require('./routes/itemData')
const basketRoutes = require('./routes/basket')
const searchRoutes = require('./routes/search')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/list', listRoutes)
server.use('/api/v1/price', priceRoutes)
server.use('/api/v1/basket', basketRoutes)
server.use('/api/v1/items', items)
server.use('/api/v1/item-data', itemData)
server.use('/api/v1/search', searchRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
