const connection = require('./connection')

function getItemsByName(db = connection) {
  return db('items').select()
}

function getPriceByItemId(itemId, db = connection) {
  return db('items')
    .join('items_stores', 'items_stores.item_id', 'id')
    .where('items.name', itemName)
    .select(
      'items.name as itemName',
      'items.id as itemId',
      'items_stores.date_updated as updatedDate',
      'items_stores.price as price',
      'items.description as description',
      'items.image_url as itemImage'
    )
}

module.exports = { getItemsByName }
