const express = require('express')
const db = require('../db/itemData')
const router = express.Router()

// Get item by id
router.get('/:id', (req, res) => {
  db.getItemData(req.params.id)
    .then((item) => {
      res.json(item)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

module.exports = router
