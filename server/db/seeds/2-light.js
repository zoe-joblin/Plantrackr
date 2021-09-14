exports.seed = knex => {
  return knex('light').insert([
    { id: 0, amount: 'i really don\'t mind' },
    { id: 1, amount: 'shady' },
    { id: 2, amount: 'indirect light' },
    { id: 3, amount: 'direct sun' },
  ])
}
