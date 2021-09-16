import { combineReducers } from 'redux'

import plants from './plants'
import loading from './loading'
import species from './species'
import water from './water'
import light from './light'

export default combineReducers({
  loading,
  plants,
  species,
  water,
  light,
})
