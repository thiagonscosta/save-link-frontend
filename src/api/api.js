import axios from 'axios'

const BASE_URL = process.env.VUE_APP_BASE_URL

export default() => {
    return axios.create({
        baseURL: BASE_URL,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}