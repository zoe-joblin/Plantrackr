exports.seed = knex => {
  return knex('water').insert([
    { id: 0, amount: 'some drips' },
    { id: 1, amount: 'a dollop' },
    { id: 2, amount: 'moist' },
    { id: 3, amount: 'soak' },
  ])
}
