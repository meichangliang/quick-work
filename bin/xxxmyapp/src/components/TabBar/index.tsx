/*
* @LastEditors: Mark
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-05-05 10:25:14
* @LastEditTime: 2019-08-02 13:18:50
 */

import React from 'react';
import { tab_icon } from './img/load';
import styles from './index.module.scss';

import { isChildRoute } from '@/utils/RouterView/inspectRouter';


interface tabList{
  icon?: any,
  icon_active?: any,
  name: string,
  id: number,
  linkPath: string
}

class TabBar extends React.Component<pageProps> {
  static propTypes = {};
  static defaultProps = {};
  state: {
    route: string;
    readonly tabList: tabList[];
  } = {
    route: '',
    tabList: [
      {
        icon: tab_icon.icon_1,
        icon_active: tab_icon.icon_1_active,
        name: 'demo',
        id: 1,
        linkPath: '/demo',
      },
      {
        icon: tab_icon.icon_2,
        icon_active: tab_icon.icon_2_active,
        name: 'sitemap',
        id: 2,
        linkPath: '/sitemap',
      },
      {
        icon: tab_icon.icon_3,
        icon_active: tab_icon.icon_3_active,
        name: 'mobx',
        id: 3,
        linkPath: '/demo/mobx',
      },
      {
        icon: tab_icon.icon_4,
        icon_active: tab_icon.icon_4_active,
        name: 'request',
        id: 4,
        linkPath: '/demo/request',
      },
      {
        icon: tab_icon.icon_5,
        icon_active: tab_icon.icon_5_active,
        name: 'style',
        id: 5,
        linkPath: '/demo/style_demo',
      },
    ],
  }

  linkTo = (Url: string) => {
    const { history } = this.props;
    const { pathname } = history.location;

    if (pathname !== Url) {
      history.push(Url);
    }
  };

  hrefTo = (item: tabList) => {
    const _this = this;

    _this.linkTo(item.linkPath);

    switch (item.id) {
      case 1:
        break;

      case 2:
        break;

      case 3:
        break;

      case 4:
        break;

      case 5:
        break;

      default:
        break;
    }
  };

  isActive = (item:tabList) => {
    const { history } = this.props;
    const { pathname } = history.location;
    // 路邮相等或者判定为二级以上子路由则判定为选中
    return (
      isChildRoute({father: item.linkPath, child: pathname})||
      item.linkPath === pathname
    );
  };

  //监听路由变化并setState
  componentDidMount() {
    this.setRoute();
  }

  UNSAFE_componentWillReceiveProps() {
    this.setRoute();
  }
  setRoute = () => {
    this.setState({
      route: this.props.history.location.pathname,
    });
  };

  render() {
    const { tabList, route } = this.state;
    return (
      <div className={styles.wrapper}>
        <div className={styles.null} />
        <div className={styles.showRoute}>当前路由 {route}</div>
        <div className={styles.tabBar}>
          {tabList.map((item: tabList) => {
            return (
              <div
                className={`${styles.item} ${this.isActive(item) &&
                  styles.active}`}
                key={item.id}
                onClick={() => {
                  return this.hrefTo(item);
                }}
              >
                <img
                  className={styles.icon}
                  alt="icon"
                  src={this.isActive(item) ? item.icon_active : item.icon}
                />
                <span className={styles.name}>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TabBar;
