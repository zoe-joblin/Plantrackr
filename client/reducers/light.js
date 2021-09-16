import {SAVE_LIGHT} from '../actions'

function reducer (state = [], action) {
  switch (action.type) {
    case SAVE_LIGHT:
        return action.light
    default:
      return state
    }
  }
    
  export default reducer