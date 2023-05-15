import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { getCookie } from 'cookies-next'
const BACKEND_NODE = 'https://develop-abi.otoman.net/'

class AxiosServices {
  instance
  static isFetchingToken = false
  constructor() {
    const instance = axios.create({
      baseURL: BACKEND_NODE
    })

    instance.interceptors.response.use(this.handleSuccess, this.handleError)
    instance.interceptors.request.use(async (config) => {
      // const accessToken = config.headers?.Authorization a | undefined
      const accessToken = getCookie('tokenABINDEV')
      config.headers['Content-Type'] = 'application/json'
      config.headers['Access-Control-Allow-Origin'] = '*'
      if (!accessToken || accessToken == '') {
        return {
          ...config
        }
      }
      config.headers['Authorization'] = 'Bearer ' + accessToken

      return {
        ...config
      }
    }, this.handleError)
    axios.defaults.withCredentials = true
    this.instance = instance
    // this.instance.defaults.timeout = 20000
  }

  handleSuccess(response) {
    return response
  }
  handleError(error) {
    return Promise.reject(error)
  }
  get(url, config) {
    return this.instance.get(url, config)
  }
  getImage(url) {
    return this.instance.get(url, { responseType: 'blob' })
  }
  post(url, data, config) {
    return this.instance.post(url, data, config)
  }
  put(url, data, config) {
    return this.instance.put(url, data, config)
  }
  delete(url, config) {
    return this.instance.delete(url, config)
  }
}
export default new AxiosServices()
