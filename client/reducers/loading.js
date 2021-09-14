import {LOADING, SAVE_PLANTS} from '../actions'

function reducer (state = false, action) {
  switch (action.type) {
    case LOADING:
      return true
    case SAVE_PLANTS:
      return false
    default:
      return state
  }
}

export default reducer
