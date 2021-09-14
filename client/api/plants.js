import request from 'superagent'

const baseUrl = '/api/v1/plants'

export const getPlants = () => {
  return request
    .get(baseUrl)
    .then(resp => resp.body)
}

export const getOnePlant = (id) => {
  return request
    .get(`${baseUrl}/${id}`)
    .then(resp => resp.body)
}
