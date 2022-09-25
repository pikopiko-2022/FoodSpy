// eslint-disable-next-line no-unused-vars
const config = require('./knexfile').development
const knex = require('knex')
const connection = knex(config)

module.exports = {
  getItems,
  getItem,
  updatePrice,
}

function getItems(db = connection) {
  return db('items').select()
}

function getItem(id, db = connection) {
  return db('items').select().where({ id }).first()
}

function updatePrice(id, newPrice, db = connection) {
  return db('itemPrices')
    .update({ price: newPrice, update_at: new Date().toISOString() })
    .where('id', id)
}
