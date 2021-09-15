import { getPlants ,deleteThePlant } from '../api/plants'

export const SAVE_PLANTS = 'SAVE_PLANTS'
export const LOADING = 'LOADING'
export const ERROR = 'ERROR'
export const UPDATE_PLANT = 'UPDATE_PLANT'
export const DELETE_PLANT = 'DELETE_PLANT'
export const PLANT_DELETED = 'PLANT_DELETED'
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

function plantHasBeenDeleted()
{
  return {
    type: PLANT_DELETED
  }
}

export function deletePlant(id)
{ 
  return {
    type: DELETE_PLANT,
    id: id
  }
}
export const update = (id, plant) => {

  return {
    type: 'UPDATE_PLANT',
    id: id,
    plant: plant
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



//thunk to delete plant
export function plantDeleted(id){
  
  //return(dispatch)  means its a thunk
  return(dispatch) => {
    //plantHasBeenDeleted()
    deleteThePlant(id)//comes from api
      .then(plant => {
        if(!plant.deleted)
        {
          throw new Error("plant has not yet been deleted")
        }
        dispatch(deletePlant(id))
        dispatch(plantHasBeenDeleted())
    })
  }
}