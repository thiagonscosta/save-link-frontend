import api from '../api/api'

const BASE_ENDPOINT = '/article'

function getAll() {
  return api.get(`${BASE_ENDPOINT}/all`)
}

function create(article) {
  return api.post(`${BASE_ENDPOINT}/create`, article)
}

export default {
  getAll,
  create
}