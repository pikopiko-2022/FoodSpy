/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {
      id: 1,
      item_name: 'Milk',
      description: '2L lite blue milk',
      image_url: '/images/milk.jpeg',
    },
    {
      id: 2,
      item_name: 'Eggs',
      description: 'Carton of a dozen eggs',
      image_url: '/images/eggs.jpeg',
    },
    {
      id: 3,
      item_name: 'Bread',
      description: 'A loaf of white toast bread',
      image_url: '/images/bread.jpeg',
    },
  ])
}
