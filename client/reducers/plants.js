
import {SAVE_PLANTS, EDIT_PLANT, DEL_PLANT, ADD_PLANT} from '../actions'

function reducer (state = [], action) {
  switch (action.type) {
    case SAVE_PLANTS:
      return action.plants
    case EDIT_PLANT:
      const plantToUpdate = state.find(plant => plant.id === action.id)
      plantToUpdate = action.plant
      return [...state]
      default:
        return state
      }
    }
    
    export default reducer
    
    // case DELETE_PLANT: