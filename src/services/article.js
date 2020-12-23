import api from '../api/api'

// const BASE_URL = process.env.VUE_APP_BASE_URL
const BASE_ENDPOINT = '/article'

function getAll() {
  return api.get(`${BASE_ENDPOINT}/all`)
}

function create(article) {
  return api.post(`${BASE_ENDPOINT}/create`)
}

export default {
  getAll,
  create
}