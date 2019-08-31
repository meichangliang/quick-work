/*
* @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-07-03 02:20:03
* @LastEditTime: 2019-07-29 14:42:49
 */
import React from 'react';
import { RouterView } from '@/utils/RouterView';

export default class extends React.Component<pageProps> {
  render() {
    const { match } = this.props;

    return (
      <div>
        <h1>这里是首页</h1>
        <RouterView path={match.path} />
      </div>
    );
  }
}
