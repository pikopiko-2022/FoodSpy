/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    { id: 1, name: 'Milk', description: '2L lite blue milk' },
    { id: 2, name: 'Eggs', description: 'Carton of a dozen eggs' },
    { id: 3, name: 'Bread', description: 'A loaf of white toast bread' },
  ])
}
