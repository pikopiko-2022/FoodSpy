const connection = require('./connection')


function getItem(id, db = connection) {
  return db('items').select().where({ id }).first()
}


module.exports = {
 
}
