import {SAVE_SPECIES, ADD_SPECIES, UPDATE_SPECIES} from '../actions'

function reducer (state = [], action) {
  switch (action.type) {
    case SAVE_SPECIES:
      return action.species
    case ADD_SPECIES:
      return [...state, action.species]
    case UPDATE_SPECIES:
      return editSpecies(state, action)
    default:
      return state
    }
  }
    
  function editSpecies(speciesArray,  action){
    if(!action.common || !action.scientific || !action.water || !action.water_freq || !action.light || !action.notes)
    {
      alert("actions must contain all keys")
      return location.reload()
    }
    const species = speciesArray.map(eachspecies => {
      console.log("each species"+eachspecies)
      if(eachspecies.id === action.id)
      {
          eachspecies.common = action.common
          eachspecies.scientific = action.scientific
          eachspecies.water = action.water
          eachspecies.light = action.light
          eachspecies.water_freq = action.water_freq
          eachspecies.notes = action.notes
          return eachspecies
      }
      return eachspecies
    })
          return species
  }


  export default reducer


