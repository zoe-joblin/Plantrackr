import {SAVE_PLANTS} from '../actions'

function reducer (state = [], action) {
  switch (action.type) {
    case SAVE_PLANTS:
      return action.plants
    default:
      return state
  }
}

export default reducer
