/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('stores').del()
  await knex('stores').insert([
    {
      id: 1,
      name: 'PAKnSAVE',
      location: 'PAKnSAVE Westgate',
      longitude: '',
      latitude: '',
      image: '',
    },
    {
      id: 2,
      name: 'Countdown',
      location: 'Countdown Northwest',
      longitude: '',
      latitude: '',
      image: '',
    },
    {
      id: 3,
      name: 'New World',
      location: 'New World Hobsonville',
      longitude: '',
      latitude: '',
      image: '',
    },
  ])
}
