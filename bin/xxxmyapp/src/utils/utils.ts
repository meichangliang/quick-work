/*
* @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-07-02 22:16:34
* @LastEditTime: 2019-07-04 15:51:56
 */

import Qs from 'qs';
import store from 'store';

export const localStore = store;

export const getUrlParam = (url: string = '') => {
  /**
   * @description: 获取当前页面的参数或者指定字符串的参数
   * @param null
   * @return: {*}
   */
  const search: string = url && window.location.search;
  return Qs.parse(search, { ignoreQueryPrefix: true });
};

export const moneyNum = (num: string | number) => {
  if (Number(num)) {
    return Number(num).toFixed(2);
  } else {
    console.error(`${num}价格有问题`);
  }
};
