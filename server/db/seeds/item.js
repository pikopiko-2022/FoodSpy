exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('item')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('item').insert([
        { id: 1, name: 'banana' },
        { id: 2, name: 'apple' },
        { id: 3, name: 'feijoa' },
      ])
    })
}
