import axios from 'axios';
import api from '../api/api';

const BASE_URL = process.env.VUE_APP_BASE_URL
const BASE_ENDPOINT = '/article'

function getAll() {
  return new Promise((resolve, reject) => {
    return axios.get(`${BASE_URL}${BASE_ENDPOINT}/all`)
      .then(resp => {
        return resolve(resp.data);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

function getByFolder(folderId) {
  return new Promise((resolve, resject) => {
    return axios.get(`${BASE_URL}${BASE_ENDPOINT}/all/${folderId}`)
      .then(resp => {
        return resolve(resp.data);
      })
      .catch(err => {
        return resject(err);
      });
  });
}

function createAticle(article) {
  return new Promise((resolve, reject) => {
    return axios.post(`${BASE_URL}${BASE_ENDPOINT}/create`, { article })
      .then(resp => {
        return resolve(resp.data);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

function deleteArticle() {
  api.delete(`${BASE_ENDPOINT}/delete`);
}

export default {
  getAll,
  getByFolder,
  createAticle,
  deleteArticle,
};