import request from 'superagent'

const baseUrl = '/api/v1/plants'

export const getPlants = () => {
  return request
    .get(baseUrl)
    .then(res => res.body)
}

export const getOnePlant = (id) => {
  return request
    .get(`${baseUrl}/${id}`)
    .then(res => res.body)
}


export const addPlant = (newPlant) => {
  return request
    .post(baseUrl)
    .send (newPlant)
    .then (res => res.body)
}

// export const deletePlant = (id) => {
//   return request 
//     .delete(`${baseUrl}/${id}`)
//     .then(res => res.body)
// }

//when updating we may need to be more specific with the sections 
//being updated? tbc
export const updatePlant = (id, newDetails) => {
  return request
    .patch(`${baseUrl}/${id}`)
    .send(newDetails)
    .then(res => res.body)
}

export const getSpecies=()=>{
  return request
  .get(`api/v1/species`)
  .then(res=>res.body)
}