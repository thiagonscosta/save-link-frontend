import axios from 'axios';

const BASE_ENDPOINT = '/folder';

function create(folder) {
  return new Promise((resolve, reject) => {
    return axios.post(`${BASE_ENDPOINT}/create`, { folder })
      .then(res => {
        return resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

function getall() {
  return new Promise((resolve, reject) => {
    return axios.get('http://localhost:9090/api/folder/all')
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