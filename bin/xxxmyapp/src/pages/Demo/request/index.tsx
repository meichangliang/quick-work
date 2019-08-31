/*
* @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-07-03 02:20:03
* @LastEditTime: 2019-08-01 18:41:16
 */

import React from 'react';
import { getRecommendList } from '@/api/demo';

export default class extends React.Component {
  getRecommendList = async () => {
    const data:any = await getRecommendList({
      count: 5,
      only_unfollowed: true,
    });
    if (data.code === 'OK') {
      console.info(data);
      alert('请求成功');
    } else {
      alert('请求失败');
    }
  }
  render() {
    return (
      <div>
        <h2>这里是 TypeScript 演示 , 二级路由</h2>
        <button onClick={this.getRecommendList}>发送请求</button>
      </div>
    );
  }
}
