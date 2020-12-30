import axios from 'axios';

const BASE_URL = process.env.VUE_APP_BASE_URL
const BASE_ENDPOINT = '/folder';

function create(folder) {
  return new Promise((resolve, reject) => {
    return axios.post(`${BASE_URL}${BASE_ENDPOINT}/create`, { folder })
      .then(resp => {
        return resolve(resp.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

function getall() {
  return new Promise((resolve, reject) => {
    return axios.get(`${BASE_URL}${BASE_ENDPOINT}/all`)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export default {
  getall,
  create
}