import axios from 'axios'

const API = () => {
  return axios.create({
    baseURL: process.env.API_URL, //localhost:8080/wp-json/ : prod: azhdev.com.au/wp-json/
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

export default API
