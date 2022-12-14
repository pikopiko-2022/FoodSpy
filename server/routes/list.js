const express = require('express')

const db = require('../db/item')

const router = express.Router()

router.get('/', (req, res) => {
  db.getItems()
    .then((results) => {
      res.json(results)
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

module.exports = router
