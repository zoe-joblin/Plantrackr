exports.seed = knex => {
  return knex('species').insert([
    { 
      id: 1,
      common: 'Snake Plant',
      scientific: 'Dracaena Trifasciata',
      water: 1,
      water_freq: 20,
      light: 0,
      notes: 'The plant features stiff, sword-like leaves ranging from 6 inches to 8 feet tall. Snake plants can vary in color; although, many have green banded leaves and commonly feature a yellow border. These plants are easy to grow and, in many cases, nearly indestructible when it comes to care. They will thrive in very bright light or almost dark corners of the house. These plants generally grow slowly in indoor light, but increasing its light exposure will boost growth if it gets a few hours of direct sun. If planting or repotting, do it in the spring. This plant is toxic to cats and dogs'
    },
    { 
      id: 2,
      common: 'Fiddle-leaf Fig',
      scientific: 'Ficus Lyrata',
      water: 2,
      water_freq: 10,
      light: 1,
      notes: 'A fiddle-leaf fig is perfect as a focal point of a room if you can situate it in a floor-standing container where the plant is allowed to grow to at least 6 feet tall. (Most indoor specimens reach around 10 feet tall.) It is a fairly fast grower and can be potted at any point in the year if you\'re like most gardeners acquiring a nursery plant to keep indoors. Keep in mind this gorgeous plant is toxic to cats and dogs'
    },
    { 
      id: 3,
      common: 'Mini Monstera',
      scientific: 'Philodendron',
      water: 2,
      water_freq: 10,
      light: 1,
      notes: 'There are two types of philodendrons: vining and non-climbing plants. The vining variety grows several feet, usually requiring some support structure to climb on, such as a trellis or around a basket. Non-climbing types have an upright growth habit and are excellent foliage plants for containers. In general, philodendrons have a fast growth rate. They’re best planted in the spring, but houseplants typically can be started with success at any time of year. They are toxic to pets and humans if ingested.'
    },
    { 
      id: 4,
      common: 'Pothos',
      scientific: 'Epipremnum Aureum',
      water: 2,
      water_freq: 14,
      light: 0,
      notes: 'Arguably one of the easiest houseplants to grow, even if you\'re someone who forgets to water your plants often enough. This trailing vine, native to the Solomon Islands in the South Pacific, boasts pointed, heart-shaped green leaves that are sometimes variegated with white, yellow, or pale green striations. Pothos can be planted or tended to indoors throughout the entire year and will grow quickly, often adding between 12 and 18 inches of length a month. Be careful if you have pets as pothos is toxic to animals'
    }
  ])
}
