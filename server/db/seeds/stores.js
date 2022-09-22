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
      location: 'PAKnSAVE Mt Albert',
      longitude: '174.706238',
      latitude: '-36.893051',
      image:
        'https://thinkpapanui.nz/wp-content/uploads/2020/04/13934686_10154488874654380_5108604418845420572_n.png',
    },
    {
      id: 2,
      name: 'Countdown',
      location: 'Countdown Grey Lynn',
      longitude: '174.7488',
      latitude: ' -36.85836',
      image:
        'https://www.johnsonvilleshoppingcentre.co.nz/wp-content/uploads/2018/10/Artboard-35.png',
    },
    {
      id: 3,
      name: 'New World',
      location: 'New World Victoria',
      longitude: '174.75101',
      latitude: '-36.84829',
      image:
        'https://upload.wikimedia.org/wikipedia/en/e/ee/New_World_%28supermarket%29_logo.jpg',
    },
  ])
}
