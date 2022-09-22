const connection = require('./connection')

function getAllItems(db = connection) {
  return db('items')
    .join('itemPrices', 'itemPrices.item_id', 'items.id')
    .join('stores', 'stores.id', 'itemPrices.store_id')
    .select()
}

module.exports = { getAllItems }
