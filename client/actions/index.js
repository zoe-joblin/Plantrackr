import { getPlants, getOnePlant, updatePlant } from '../api/plants'


export const SAVE_PLANTS = 'SAVE_PLANTS'
export const LOADING = 'LOADING'
export const ERROR = 'ERROR'
export const EDIT_PLANT = 'EDIT_PLANT'
export const ADD_PLANT = 'ADD_PLANT'
export const DEL_PLANT = 'DEL_PLANT'

// ----- ACTION CREATORS -----


export const addNewPlant = (newPlant) => {
  return {
    type: ADD_PLANT,
    plant: newPlant
  }
}
export const EditPlantDetails = ( id, newPlantDetails ) => {
  return {
    type: EDIT_PLANT,
    id,
    plant: newPlantDetails
  }
}

export const deletePlant = ( id ) => {
  return {
    type: DEL_PLANT,
    id
  }
}

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


export function updatedPlant (id, newPlantDetails) {
  return (dispatch) => {
    updatePlant(id, newPlantDetails)
      .then((output) => {
        dispatch(EditPlantDetails(id, newPlantDetails))
      })
  }
  
}
