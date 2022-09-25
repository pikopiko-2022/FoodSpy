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
      description: '12 Eggs, Tray',
      image_url: '/images/eggs.jpeg',
    },
    {
      id: 3,
      item_name: 'Bread',
      description: 'Loaf of white toast bread',
      image_url: '/images/bread.jpeg',
    },
    {
      id: 4,
      item_name: 'Pasta',
      description: '500g pasta',
      image_url: '/images/pasta.jpg',
    },
    {
      id: 5,
      item_name: 'Frozen Stirfry Vegetables',
      description: '1kg frozen stirfry vegetbles',
      image_url: '/images/stirfry.jpg',
    },
    {
      id: 6,
      item_name: 'Canned Tomatoes',
      description: '400g canned tomatoes',
      image_url: '/images/canned-toms.jpeg',
    },
    {
      id: 7,
      item_name: 'Oats',
      description: '1kg bag of oats',
      image_url: '/images/oats.jpeg',
    },
    {
      id: 8,
      item_name: 'Potatoes',
      description: '1kg potatoes',
      image_url: '/images/potatoes.jpeg',
    },
    {
      id: 9,
      item_name: 'Canola Oil',
      description: '2L canola oil',
      image_url: '/images/oil.jpg',
    },
    {
      id: 10,
      item_name: 'Bananas',
      description: 'Price per kg',
      image_url: '/images/bananas.jpg',
    },
  ])
}
