const connection = require('./connection')

module.exports = {
  getItemData,
}

function getItemData(id, db = connection) {
  return db('items')
    .join('itemPrices', 'itemPrices.item_id', 'items.id')
    .join('stores', 'stores.id', 'itemPrices.store_id')
    .select('*', 'itemPrices.id as itemPricesId')
    .where({ 'items.id': id })
}
