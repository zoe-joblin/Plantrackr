
import {SAVE_PLANTS, EDIT_PLANT, DEL_PLANT, ADD_PLANT} from '../actions'

function reducer (state = [], action) {
  switch (action.type) {
    case 'ADD_PLANT':
      return {
        plants: [...state, action.plant]
      }
    case 'DEL_PLANT':
      return {
        plants: [state.plants.filter((plantId) => plantId !== action.id)]
      }
    case 'SAVE_PLANTS':
      return action.plants
    case 'EDIT_PLANT':
      const plantToUpdate = state.plants.find(plant => plant.id === action.id)
      plantToUpdate = action.plant
      console.log("update plant", plantToUpdate)
      return [...state]
    default:
        return state
      }
    }
    
    export default reducer
    
    // case DELETE_PLANT: