const express = require('express')
const db = require('../db/itemData')
const router = express.Router()

// Get item by id
router.get('/:id', (req, res) => {
  db.getItemData(req.params.id)
    .then((item) => {
      res.json(item)
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

module.exports = router
