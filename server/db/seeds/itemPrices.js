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

    // Pasta - Penne or Spaghetti
    { item_id: 4, store_id: 1, price: 0.99 },
    { item_id: 4, store_id: 2, price: 1.2 },
    { item_id: 4, store_id: 3, price: 1.19 },

    // Stir-fry frozen vege mix
    { item_id: 5, store_id: 1, price: 3.79 },
    { item_id: 5, store_id: 2, price: 4.5 },
    { item_id: 5, store_id: 3, price: 4.19 },

    //  Canned toms
    { item_id: 6, store_id: 1, price: 1.4 },
    { item_id: 6, store_id: 2, price: 1.0 },
    { item_id: 6, store_id: 3, price: 1.19 },

    //  Oats
    { item_id: 7, store_id: 1, price: 2.3 },
    { item_id: 7, store_id: 2, price: 3.9 },
    { item_id: 7, store_id: 3, price: 2.1 },

    //  Potatoes
    { item_id: 8, store_id: 1, price: 2.49 },
    { item_id: 8, store_id: 2, price: 1.99 },
    { item_id: 8, store_id: 3, price: 2.99 },

    //  Canola oil
    { item_id: 9, store_id: 1, price: 8.19 },
    { item_id: 9, store_id: 2, price: 9.39 },
    { item_id: 9, store_id: 3, price: 7.69 },

    //  Bananas
    { item_id: 10, store_id: 1, price: 3.25 },
    { item_id: 10, store_id: 2, price: 3.6 },
    { item_id: 10, store_id: 3, price: 3.49 },
  ])
}
// PAKnSave - 1
// Countdown - 2
// New World - 3
