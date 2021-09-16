exports.seed = knex => {
  return knex('water').insert([
    { id: 0, amount: 'Give me some drips' },
    { id: 1, amount: 'Give me a dollop' },
    { id: 2, amount: 'Moisten me' },
    { id: 3, amount: 'Soak me' },
  ])
}
