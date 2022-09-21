/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('itemPrices').del()
  await knex('itemPrices').insert([
    { item_id: 1, store_id: 1, price: 3.84 },
    { item_id: 1, store_id: 2, price: 3.84 },
    { item_id: 1, store_id: 3, price: 3.89 },

    { item_id: 2, store_id: 1, price: 4.49 },
    { item_id: 2, store_id: 2, price: 6.2 },
    { item_id: 2, store_id: 3, price: 5.99 },

    { item_id: 3, store_id: 1, price: 1.15 },
    { item_id: 3, store_id: 2, price: 1.2 },
    { item_id: 3, store_id: 3, price: 1.19 },
  ])
}
