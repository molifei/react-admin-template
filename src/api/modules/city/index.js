/*
 * @author WYK
 * 各模块的接口调用
 * Auth
 */

// URL列表
import base from '@/api/base';
// 封装过的axios实例
import ajax from '@/api/http.js';
// QS  序列化参数
import qs from 'qs';

// const host = base.mock;
// const host = base.dev
const host = base.prod;

const city = {

  // 获取城市列表
  getCityList(params) {
    return ajax.get(`${host}/city/list`, qs.stringify(params));
  },

  // 开通城市
  getOpenCity(params) {
    return ajax.post(`${host}/open/city`, qs.stringify(params));
  },

  // 获取中国城市
  getAllCity(params) {
    return ajax.get(`${host}/getAllCity`, qs.stringify(params));
  }

};

export default city;
