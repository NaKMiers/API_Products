import axios from 'axios'
import Config from '../CONSTANTS/Config'

function callApi(endpoint, method, data) {
   return axios({
      url: `${Config.URL_API}/${endpoint}`,
      method: method,
      data: data
   }).catch(error => console.log(error))
}

export default callApi
