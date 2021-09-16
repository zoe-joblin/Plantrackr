
<<<<<<< HEAD
import { getPlants, getOnePlant, updatePlant ,deleteThePlant, getSpecies, addSpecies} from '../api/plants'
=======
import { getPlants, getOnePlant, addPlant, updatePlant ,deletePlant, getSpecies} from '../api/plants'
>>>>>>> f28bb11ac6e2da435456abadeb096fcf5931a463

export const SAVE_PLANTS = 'SAVE_PLANTS'
export const SAVE_SPECIES = 'SAVE_SPECIES'
export const LOADING = 'LOADING'
export const ERROR = 'ERROR'
export const UPDATE_PLANT = 'UPDATE_PLANT'
export const ADD_PLANT = 'ADD_PLANT'
export const PLANT_DELETED = 'PLANT_DELETED'


// ----- ACTION CREATORS -----

export const addPlantAction = (newPlant) => {
  return {
    type: ADD_PLANT,
    plant: newPlant
  }
}

export const savePlants = (plants) => {
  return {
    type: SAVE_PLANTS,
    plants
  }
}

export const saveSpecies = (species) => {
  return {
    type: SAVE_SPECIES,
    species
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

export const deleteAction = (id) =>
{
  return {
    type: PLANT_DELETED,
    id
  }
}

export const updateAction = (id, plant) => {

  return {
    type: UPDATE_PLANT,
    id: id,
    plant: plant
  }
}

export const addSpecies = (newSpecies) => {
    return {
      type: 'ADD_SPECIES',
      species: newSpecies
    }
}

// ----- THUNKS -----

export function loadPlants () {
  return (dispatch) => {
    dispatch(loading())
    getPlants()
      .then((result) => {
        //console.log("results in thunk index"+i, result)
        dispatch(savePlants(result))
        // dispatch(notLoading())
      })
      .catch(err => {
        dispatch(errMessage(err.message))
      })
  }
}

export function loadSpecies () {
  return (dispatch) => {
    dispatch(loading())
    getSpecies()
      .then((result) => {
        dispatch(saveSpecies(result))
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
        dispatch(updateAction(id, newPlantDetails))
      })
  }
  
}

export function createNewPlant (plant) {
  return (dispatch) => {
    addPlant(plant)
      .then((newId) => {
        dispatch(addPlantAction({ id: newId, plant }))
      })
      .catch(err => {
        dispatch(errorHappened(err.message))
      })
  }
}

export function createNewSpecies (newSpecies) {
  return (dispatch) => {
    addSpecies(newSpecies)
      .then(())
export function deleteThunk (id) {
  return (dispatch) => {
    deletePlant(id)
      .then(() => {
        dispatch(deleteAction(id))
      })
  }
}
