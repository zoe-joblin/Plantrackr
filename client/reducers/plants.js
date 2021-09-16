
import {SAVE_PLANTS, EDIT_PLANT, PLANT_DELETED, ADD_PLANT} from '../actions'

function reducer (state = [], action) {
  switch (action.type) {
    case 'ADD_PLANT':
      return {
        plants: [...state, action.plant]
      }
//     case 'DEL_PLANT':
//       return {
//         plants: [state.plants.filter((plantId) => plantId !== action.id)]
//       }
    case 'SAVE_PLANTS':
      return action.plants
    case 'EDIT_PLANT':
      const plantToUpdate = state.plants.find(plant => plant.id === action.id)
      plantToUpdate = action.plant
      console.log("update plant", plantToUpdate)
      return [...state]

    case PLANT_DELETED:
        return state.filter((plant) => plant.id !== action.id)
    default:
        return state
      }
    }
    
    export default reducer
    
   