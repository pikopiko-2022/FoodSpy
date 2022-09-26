const express = require('express')

const db = require('../db/search')

const router = express.Router()

router.get('/', (req, res) => {
  const itemName = req.query.name
  db.getItemsByName(itemName)
    .then((results) => {
      res.json(results)
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

module.exports = router
