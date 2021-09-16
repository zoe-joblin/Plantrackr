import {SAVE_SPECIES} from '../actions'

function reducer (state = [], action) {
  switch (action.type) {
    case SAVE_SPECIES:
      return action.species
      default:
        return state
      }
    }
    
    export default reducer