import axios from 'axios'

const BASE_URL = process.env.VUE_APP_BASE_URL

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default api;
