const express = require('express')

const db = require('../db/basket')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllItems()
    .then((results) => {
      res.json(results)
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

module.exports = router
