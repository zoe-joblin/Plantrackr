
import {SAVE_PLANTS, UPDATE_PLANT, PLANT_DELETED, ADD_PLANT} from '../actions'

function reducer (state = [], action) {
  switch (action.type) {
    case ADD_PLANT:
      return [...state, action.plant]
    case SAVE_PLANTS:
      return action.plants
    case UPDATE_PLANT:
      return updatePlant(state, action)
        //plants: [state.map((plant) => plant === action.plant ? newPlant : plant )]
      // const plantToUpdate = state.plants.find(plant => plant.id === action.id)
      // plantToUpdate = action.plant
      // console.log("update plant", plantToUpdate)
      // return [...state]
      // return [...state, action.plant]
    case SAVE_PLANTS:
      return action.plants
    // case UPDATE_PLANT:
    //   const plantToUpdate = state.plants.find(plant => plant.id === action.id)
    //   plantToUpdate = action.plant
    //   console.log("update plant", plantToUpdate)
    //   return [...state]
    case PLANT_DELETED:
        return state.filter((plant) => plant.id !== action.id)
    default:
        return state
      }
  }
    
function updatePlant(plantArray,  action){

  if(!action.img || !action.note || !action.name || !action.species || !action.id)
  {
    alert("actions must contain key prop id, name, note, species, img ")
    return location.reload()
  }
  const plants = plantArray.map(eachPlant => {
    console.log("each plant"+eachPlant)
    if(eachPlant.id === action.id)
    {
        eachPlant.name = action.name
        eachPlant.species_id = action.species
        eachPlant.img = action.img
        eachPlant.note = action.note
        return eachPlant
    }
    return eachPlant
  })
        return plants
}


    export default reducer
    
   