import { combineReducers } from 'redux'

import plants from './plants'
import loading from './loading'

export default combineReducers({
  loading,
  plants
})
