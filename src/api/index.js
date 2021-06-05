/*
 * @author WYK
 * 接口的统一出口，调用只需引入此文件
 *
 */

import auth from './modules/auth';

import table from './modules/table'

import city from './modules/city'
import order from './modules/order'


export default {
  auth,

  table,

  city,
  order
};
