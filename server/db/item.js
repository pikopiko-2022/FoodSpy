// eslint-disable-next-line no-unused-vars
const config = require('./knexfile').development
const connection = require('knex')(config)

module.exports = {
  getItems,
  getItem,
}

function getItems(db = connection) {
  return db('items').select()
}

function getItem(id, db = connection) {
  return db('item').select().where({ id }).first()
}
