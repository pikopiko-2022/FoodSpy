const express = require('express')

const { getHomeContent } = require('../db/home')

const router = express.Router()

router.get('/', (req, res) => {
  getHomeContent()
    .then((content) => {
      res.json(content)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
