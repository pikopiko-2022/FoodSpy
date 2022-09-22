const express = require('express')

const db = require('../db/price')

const router = express.Router()

router.get('/', (req, res) => {
  const id = req.query.id
  db.getDataByItemId(id)
    .then((results) => {
      res.json(results)
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

module.exports = router
