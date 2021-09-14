import { getPlants } from '../api/plants'

export const SAVE_PLANTS = 'SAVE_PLANTS'
export const LOADING = 'LOADING'
export const ERROR = 'ERROR'

// ----- ACTION CREATORS -----

export const savePlants = (plants) => {
  return {
    type: SAVE_PLANTS,
    plants
  }
}

export const loading = () => {
  return {
    type: LOADING
  }
}

export const errMessage = (message) => {
  return {
    type: ERROR,
    message
  }
}

// ----- THUNKS -----

export function loadPlants () {
  return (dispatch) => {
    dispatch(loading())
    getPlants()
      .then((result) => {
        dispatch(savePlants(result))
        // dispatch(notLoading())
      })
      .catch(err => {
        dispatch(errMessage(err.message))
      })
  }
}
