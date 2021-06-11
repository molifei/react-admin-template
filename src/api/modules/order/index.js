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

  // 获取订单列表
  getOrderList(params) {
    return ajax.get(`${host}/order/list`, params);
  },

  // 关闭订单
  getCloseOrder(params) {
    return ajax.post(`${host}/order/close`, qs.stringify(params));
  },

  // 获取订单详情
  getOrderDetail(params) {
    return ajax.get(`${host}/order/detail`, params);
  }

};

export default order;
