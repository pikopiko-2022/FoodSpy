const connection = require('./connection')

function getItemsByName(itemName, db = connection) {
  return db('items').where('items.item_name', itemName).select()
}

module.exports = { getItemsByName }
