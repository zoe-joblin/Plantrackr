import {SAVE_SPECIES, ADD_SPECIES} from '../actions'

function reducer (state = [], action) {
  switch (action.type) {
    case SAVE_SPECIES:
      return action.species
    case ADD_SPECIES:
      return [...state, action.species]

      default:
        return state
      }
    }
    
    export default reducer