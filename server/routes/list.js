const express = require('express')

const db = require('../db/list')

const router = express.Router()

router.get('/', (req, res) => {
  // const { name } = req.query
  // console.log(name)
  db.getItemsByName()
    .then((results) => {
      res.json(results)
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

module.exports = router
