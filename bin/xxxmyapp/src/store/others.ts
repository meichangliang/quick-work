/*
* @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-05-15 16:31:20
* @LastEditTime: 2019-08-02 11:09:40
 */

import { observable, action } from 'mobx';
import { getRecommendList } from '@/api/demo';
class OthersStore {
  @observable str: any;

  constructor() {
    this.str = '这个值来自其他模块';
  }
  @action

  getData = () => {
    const _this = this;
    getRecommendList({
      seen_ids: '123',
      count: 5,
      only_unfollowed: true,
    }).then((res:any) => {
      _this.str = JSON.stringify(res);
    });
  };
}

const otherStore = new OthersStore(); //通过new 创建一个homeStore对象实例通过export导出

export default otherStore;
