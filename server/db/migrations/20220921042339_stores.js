/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('stores', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('location')
    table.decimal('longitude')
    table.decimal('latitude')
    table.text('image')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('stores')
}
