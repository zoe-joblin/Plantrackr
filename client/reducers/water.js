import {SAVE_WATER} from '../actions'

function reducer (state = [], action) {
  switch (action.type) {
    case SAVE_WATER:
        return action.water
    default:
      return state
    }
  }
    
  export default reducer