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

// PAKnSAVE Westgate
//https://www.paknsave.co.nz/shop/product/5201487_ea_000pns?name=lite-milk
// https://www.paknsave.co.nz/shop/product/5281163_ea_000pns?name=size-7-12-pack-colony-eggs
// https://www.paknsave.co.nz/shop/product/5092911_ea_000pns?name=white-toast-bread

// Countdown Northwest
// https://www.countdown.co.nz/shop/productdetails?stockcode=282766&name=countdown-milk-lite
// https://www.countdown.co.nz/shop/productdetails?stockcode=274989&name=farmer-brown-eggs-dozen-brown-size-7
// https://www.countdown.co.nz/shop/productdetails?stockcode=683365&name=essentials-sliced-bread-white
// unsure if this is toast or sandwich sliced bread

// New World Hobsonville
// https://www.newworld.co.nz/shop/product/5201487_ea_000nw?name=lite-milk
// https://www.newworld.co.nz/shop/product/5031015_ea_000nw?name=size-7-eggs
// https://www.newworld.co.nz/shop/product/5092911_ea_000nw?name=white-toast-bread
