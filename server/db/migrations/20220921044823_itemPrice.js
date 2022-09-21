/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
   return knex.schema.createTable('itemPrice', (table) => {
     table.integer('stores_id')
     table.integer('items_id')
     table.integer('price')
     table.integer('dateUpdated')
   })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('itemPrice')
};
