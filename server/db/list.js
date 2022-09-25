const connection = require('./connection')

//this is the same as getItems in db/item.js - just use that function instead of duplicating
function getItems(db = connection) {
  return db('items').select()
}

module.exports = { getItems }
