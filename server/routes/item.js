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
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

// Get item by id
router.get('/:id', (req, res) => {
  db.getItem(req.params.id)
    .then((item) => {
      res.json(item)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

router.post('/:id', (req, res) => {
  const price = req.body.price

  db.updatePrice(req.params.id, price)
    .then(() => {
      res.sendStatus(204)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

module.exports = router
