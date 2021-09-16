
import {SAVE_PLANTS, EDIT_PLANT, PLANT_DELETED, ADD_PLANT} from '../actions'

function reducer (state = [], action) {
  switch (action.type) {
    case SAVE_PLANTS:
      return action.plants
    case EDIT_PLANT:
      const plantToUpdate = state.find(plant => plant.id === action.id)
      plantToUpdate = action.plant
      return [...state]
    case PLANT_DELETED:
        return state.filter((plant) => plant.id !== action.id)
      default:
        return state
      }
    }
    
    export default reducer
    
   