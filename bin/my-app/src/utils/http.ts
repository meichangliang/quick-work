/*
* @LastEditors: Mark
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-04-22 01:22:37
* @LastEditTime: 2019-05-21 18:39:04
 */
import Taro from '@tarojs/taro';
import { getStore } from './utils';
import { baseUrl } from '../config/baseUrl';

export { baseUrl };

const interceptor = function (chain) {
  const requestParams = chain.requestParams;
  // const { method, data, url } = requestParams;
  return chain.proceed(requestParams).then((res) => {
    const data = res.data;
    if (data.code === 'OK') {
      return data;
    } else {
      Taro.showToast({
        title: data.message,
        icon: 'none',
      });
      return data;
    }
  });
};

Taro.addInterceptor(interceptor);

const request = ({ url, data, method }) => {
  const token = getStore('userToken');
  return Taro.request({
    url: baseUrl + url,
    data,
    method,
    header: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const ajax = request;
