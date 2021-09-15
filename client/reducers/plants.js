import {SAVE_PLANTS, UPDATE_PLANT, DELETE_PLANT} from '../actions'

function reducer (state = [], action) {
  switch (action.type) {
    case SAVE_PLANTS:
      return action.plants
    // case UPDATE_PLANT:
    //   return {

    //   }  
    case DELETE_PLANT:
        return deletePlant(state, action)
        
    default:
      return state
  }
}


function update(state, action)
{

    
}

function deletePlant(plantsArrayState, action)
{

  const filteredPlant = plantsArrayState.filter(eachPlant => {

    if(eachPlant.id !== action.id)
    {
      return eachPlant
    }
  })
  return filteredPlant
}

export default reducer
