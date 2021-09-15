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


export const updatePlant = (id, newDetails) => {
  return request
    .patch(`${baseUrl}/${id}`)
    .send(newDetails)
    .then(res => res.body)

}