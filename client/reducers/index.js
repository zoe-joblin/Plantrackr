import { combineReducers } from 'redux'

import plants from './plants'
import loading from './loading'
import species from './species'

export default combineReducers({
  loading,
  plants,
  species,
})
