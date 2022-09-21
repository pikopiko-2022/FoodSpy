const connection = require('./connection')

function getHomeContent(db = connection) {
  return db('fruit').select()
}

module.exports = {
  getHomeContent,
}
