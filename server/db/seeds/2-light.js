exports.seed = knex => {
  return knex('light').insert([
    { id: 0, amount: 'I really don\'t mind' },
    { id: 1, amount: 'Shady' },
    { id: 2, amount: 'Indirect light' },
    { id: 3, amount: 'Direct sun' },
  ])
}
