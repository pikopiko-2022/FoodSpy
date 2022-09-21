const express = require('express')
const db = require('../db/item')
const router = express.Router()

// Get all items
router.get('/', (req, res) => {
  db.getItems()
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Server error' })
    })
})

// Get item by id
router.get('/:id', (req, res) => {
  db.getItem(req.params.id)
    .then((item) => {
      console.log(item)
      res.json(item)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

module.exports = router
