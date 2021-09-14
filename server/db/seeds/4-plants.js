exports.seed = knex => {
  return knex('plants').insert([
    { 
      id: 1, 
      name: 'Michelle Ssssavage', 
      species: 1, 
      img: 'snake_plant.jpg',
      note: 'is cute'
    },
    { 
      id: 2, 
      name: 'Roger shoulda dodged ya', 
      species: 2, 
      img: 'fiddleleaf_fig.jpg',
      note: 'fussy lil fiddle-leaf'
    },
    { 
      id: 3, 
      name: 'Sarah we stare at her', 
      species: 3, 
      img: 'mini_monstera.jpg',
      note: 'a beauty'
    },
    { 
      id: 4, 
      name: 'Paul', 
      species: 4, 
      img: 'pothos.jpg',
      note: 'easy to care for, we like it'
    },
  ])
}
