# Plant Trackr

## Setup

After cloning this repo

```sh
cd plant-trackr
npm install
npm run knex migrate:latest
npm run knex seed:run
npm run dev
```

Check that everything is running on [localhost:3000](http://localhost:3000).

## User Stories

**PLANTS**  
As a user I want to be able to:  

- see a list of all my plants. 
- see an individual plants and it's details. 
- enter a new plant.
- edit the details of my plant.
- delete a plant (that sadly I have killed).

### Stretch Stories

**PLANTS**  
As a user I want to be able to: 

- quickly update when I last watered this plant.
- see any plants that need watering in the last 7 days.
- upload a picture of my plant.   

**FORUM**   
As a user I want to be able to:  

- post a question about my plant.
- answer a question.

## Database Layout

[database diagram](/dbDiagram.png)

## API Routes

### GET /api/v1/plants/
Returns an array of 4 items that look like: 

```
[
  {
    "id": 1,
    "name": "Michelle Ssssavage",
    "species_id": 1,
    "common": "Snake Plant",
    "scientific": "Dracaena Trifasciata",
    "img": "snake_plant.jpg",
    "light_id": 0,
    "light": "i really don't mind",
    "water_id": 1,
    "water": "a dollop",
    "water_freq": 20,
    "last_watered": null,
    "note": "is cute",
    "species_notes": "The plant features stiff, sword-like leaves ranging from 6 inches to 8 feet tall. Snake plants can vary in color; although, many have green banded leaves and commonly feature a yellow border. These plants are easy to grow and, in many cases, nearly indestructible when it comes to care. They will thrive in very bright light or almost dark corners of the house. These plants generally grow slowly in indoor light, but increasing its light exposure will boost growth if it gets a few hours of direct sun. If planting or repotting, do it in the spring. This plant is toxic to cats and dogs"
  }
  ```

 ### GET /api/v1/plants/:id
 Returns an object of the specified id that looks like: 

```
 {
  "id": 1,
  "name": "Michelle Ssssavage",
  "species_id": 1,
  "common": "Snake Plant",
  "scientific": "Dracaena Trifasciata",
  "img": "snake_plant.jpg",
  "light_id": 0,
  "light": "i really don't mind",
  "water_id": 1,
  "water": "a dollop",
  "water_freq": 20,
  "last_watered": null,
  "note": "is cute",
  "species_notes": "The plant features stiff, sword-like leaves ranging from 6 inches to 8 feet tall. Snake plants can vary in color; although, many have green banded leaves and commonly feature a yellow border. These plants are easy to grow and, in many cases, nearly indestructible when it comes to care. They will thrive in very bright light or almost dark corners of the house. These plants generally grow slowly in indoor light, but increasing its light exposure will boost growth if it gets a few hours of direct sun. If planting or repotting, do it in the spring. This plant is toxic to cats and dogs"
}
```

## Redux Store
The initial store state looks like:

```
{
  loading: false,
  plants: []
}
```

**loading**  
store state is initially false and will return a boolean - either true or false.  
**plants**  
store state is initially an empty array and will return a populated array of all plant data.
