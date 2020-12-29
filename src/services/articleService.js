import api from '../api/api';

const BASE_ENDPOINT = '/article'

function getAll() {
  return api.get(`${BASE_ENDPOINT}/all`)
}

function createAticle() {
  return api.post(`${BASE_ENDPOINT}/create`);
}

function deleteArticle() {
  api.delete(`${BASE_ENDPOINT}/delete`);
}

export default {
  getAll,
  createAticle,
  deleteArticle,
};