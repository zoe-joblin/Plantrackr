import { getPlants, updatePlant ,deletePlant, getSpecies, addSpecies, addPlant } from '../api/plants'


export const SAVE_PLANTS = 'SAVE_PLANTS'
export const SAVE_SPECIES = 'SAVE_SPECIES'
export const LOADING = 'LOADING'
export const ERROR = 'ERROR'
export const UPDATE_PLANT = 'UPDATE_PLANT'
export const ADD_PLANT = 'ADD_PLANT'
export const PLANT_DELETED = 'PLANT_DELETED'
export const ADD_SPECIES = 'ADD_SPECIES'

// export const EDIT_PLANT = 'EDIT_PLANT'

// ----- ACTION CREATORS -----

export const addPlantAction = (newPlant) => {
  return {
    type: ADD_PLANT,
    plant: newPlant
  }
}

export const EditPlantDetails = ( id, newPlantDetails ) => {
  return {
    type: EDIT_PLANT,
    id,
    name: newPlantDetails
  }
}
// export const EditPlantDetails = ( id, newPlantDetails ) => {
//   return {
//     type: EDIT_PLANT,
//     id,
//     name: newPlantDetails
//   }
// }

// export const deletePlant = ( id ) => {
//   return {
//     type: DEL_PLANT,
//     id
//   }
// }

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

export const deleteAction = (id) => {
  return {
    type: PLANT_DELETED,
    id
  }
}
export const updateAction = (id, plant) => {

  return {
    type: UPDATE_PLANT,
    id: id,
    name: plant.name,
    species: plant.species,
    img:
    plant.img,
    note: plant.note
  }
}

export const addSpeciesAction = (newSpecies) => {
  return {
    type: ADD_SPECIES,
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

export function updatedPlant (id, newPlantObject) {
  return (dispatch) => {
    updatePlant(id, newPlantObject)
      .then((newPlant) => {
        dispatch(updateAction(id, newPlantObject))
      })
  }
  
}

export function createNewPlant (plant) {
  return (dispatch) => {
    addPlant(plant)
      .then((plant) => {
        dispatch(addPlantAction( plant ))
      })
  }
}

export function createNewSpecies (species) {
  return (dispatch) => {
    addSpecies(species)
      .then((newId) => {
        dispatch(addSpeciesAction ({ id: newId, ...species}))
      })
    }
}


export function deleteThunk (id) {
  return (dispatch) => {
    deletePlant(id)
      .then(() => {
        dispatch(deleteAction(id))
      })
  }
}

