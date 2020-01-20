import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 60000,
  withCredentials: true
})

instance.interceptors.request.use(cfg => {
  return cfg
}, err => {
  return Promise.reject(err)
})

instance.interceptors.response.use(res => {
  return Promise.resolve(res.data)
}, err => {
  return Promise.reject(err)
})

export default instance
