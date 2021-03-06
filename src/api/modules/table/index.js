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

const order = {

  // 获取列表
  getTableList(params) {
    return ajax.get(`${host}/table/list`, qs.stringify(params));
  }

};

export default order;
