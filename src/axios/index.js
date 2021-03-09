import axios from 'axios'

axios.interceptors.response.use(
  res => {
    return Promise.resolve(res.data)
  },
  error => {
    return Promise.reject(error)
  }
)

export default axios