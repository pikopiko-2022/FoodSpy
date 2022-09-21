/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('itemPrices', (table) => {
    table.increments('id')
    table.integer('store_id')
    table.integer('item_id')
    table.decimal('price')
    table.timestamp('update_at').defaultTo(knex.fn.now())
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('itemPrices')
}
