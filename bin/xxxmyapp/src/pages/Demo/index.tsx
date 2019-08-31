/*
* @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-07-03 02:20:03
* @LastEditTime: 2019-08-02 11:36:37
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { RouterView, findRoute } from '@/utils/RouterView';
import TabBar from '@/components/TabBar';

export default class extends React.Component<pageProps> {
  linkList = () => {
    const { match } = this.props;
    const route = findRoute(match.path);
    const routes = route && route.routes;
    const linkList = [];
    for (const key in routes) {
      if (routes.hasOwnProperty(key)) {
        const el = routes[key];
        linkList.push(
          <Link to={key} key={key} style={{ display: 'block', margin: '10px' }}>
            {el.name}
          </Link>
        );
      }
    }
    return linkList;
  };
  render() {
    const { match } = this.props;

    return (
      <div>
        <h1>这里是 demo 页面 </h1>
        <button
          onClick={() => {
            return this.props.history.push('/');
          }}
        >
          跳转回 首页
        </button>
        {this.linkList()}
        <hr />
        <RouterView path={match.path} />
        <TabBar {...this.props}/>
      </div>
    );
  }
}
