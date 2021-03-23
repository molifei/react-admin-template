import axios from 'axios'
import { message } from 'antd';

const ajax = (options) => {
  return new Promise((resolve, reject) => {
    let baseUrl = 'http://127.0.0.1:4523/mock/379821'
    axios({
      url: options.url,
      method: options.method || 'get',
      baseURL: baseUrl,
      timeout: options.timeout || 10000,
      params: options.params || ''
    })
      .then(res => {
        if (res.status === 200) {
          if (res.data.code === '0') {
            resolve(res)
          } else {
            message.error(res.data.msg)
          }

        } else {
          reject()
        }
      })
  })
}

export default ajax
