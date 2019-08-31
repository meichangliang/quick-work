/*
* @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-07-02 17:47:10
* @LastEditTime: 2019-07-29 15:16:33
 */

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getRouterList } from './inspectRouter';
import sitemap from '@/config/sitemap';


interface PropsType {
  path: string | '';
}

class RenderView extends Component<PropsType> {
  render() {
    const { path } = this.props;
    const routerList = getRouterList(path);

    if (routerList) {
    } else {
      return null;
    }
    return (
      <Switch>
        {!path &&<Route
          path="/sitemap"
          component={sitemap}
        />

        }
        {routerList.map((item, index) => {
          return (
            <Route
              key={index}
              exact={item.exact}
              path={item.path}
              component={item.component}
            />
          );
        })}
      </Switch>
    );
  }
}
export default RenderView;
