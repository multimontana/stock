import axios from 'axios'

const ApiService = {
  /**
   * @author Artyom Harutyunyan
   * initialize http headers for ajax request
   */

  init() {
    axios.defaults.baseURL =
      'https://api2.hostkey.ru/v1/servers/get-list-servers'
    axios.defaults.headers['Access-Control-Allow-Origin'] = '*'
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
  },

  /**
   * @author Artyom Harutyunyan
   * need for user autorization with help token
   */

  setHeader() {
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${JwtService.getToken()}`
  },

  /**
   * @param resource
   * @param params
   * @returns {Promise<AxiosResponse<T> | never>}
   */

  query(resource, params) {
    return axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  },

  /**
   *
   * @param resource
   * @param slug
   * @returns {Promise<AxiosResponse<T> | never>}
   */

  get(resource, slug = '') {
    let params = ''
    if (!_.isNaN(slug)) {
      params = '?' + slug
    }
    if (_.isObject(slug)) {
      params =
        '?' +
        _.keys(slug)
          .filter(key => slug[key] != null && slug[key] !== 'null')
          .map(key => key + '=' + slug[key])
          .join('&')
    }
    return axios.get(`${resource}${params}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  },

  /**
   * @param resource
   * @param params
   * @returns {Promise<AxiosResponse<T>>}
   */

  post(resource, params) {
    if (JwtService.getToken() !== null) {
      this.setHeader()
    } else {
    }
    return axios.post(`${resource}`, params)
  },

  /**
   * @param resource
   * @param slug
   * @param params
   * @returns {Promise<AxiosResponse<T>>}
   */

  update(resource, slug, params) {
    return axios.put(`${resource}/${slug}`, params)
  },

  /**
   * @param resource
   * @param params
   * @returns {Promise<AxiosResponse<T>>}
   */

  put(resource, params) {
    return axios.put(`${resource}`, params)
  },

  /**
   * @param resource
   * @returns {Promise<AxiosResponse<T> | never>}
   */

  delete(resource) {
    return axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  },
}

export default ApiService
