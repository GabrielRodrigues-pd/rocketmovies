import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rocketmovies-api-y5vu.onrender.com'
})
