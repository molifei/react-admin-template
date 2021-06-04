/*
 * @author WYK
 * 接口的统一出口，调用只需引入此文件
 *
 */

import auth from './modules/auth';

import order from './modules/order'


export default {
  auth,
  order
};
