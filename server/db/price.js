const connection = require('./connection')

function getDataByItemId(itemId, db = connection) {
  return db('items')
    .join('itemPrices', 'itemPrices.item_id', 'items.id')
    .join('stores', 'stores.id', 'itemPrices.store_id')
    .where('items.id', itemId)
    .select()
}

module.exports = { getDataByItemId }
