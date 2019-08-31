/*
* @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-07-02 21:46:26
* @LastEditTime: 2019-08-02 10:50:35
 */

import React from 'react';

//路由模式切换
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { HashRouter as Router,  Route } from 'react-router-dom';
//路由模式切换 -- end

//路由组件
import { RouterView, findRoute } from '@/utils/RouterView';
//路由组件 -- end

//请求设置
import {$axios_set_default} from '@/utils/http';
//请求设置 -- end

// Mobx
import { Provider } from 'mobx-react';
import * as store from '@/store/index';
// Mobx -- end

class BaseRouter extends React.Component<pageProps> {
  //全局的路由变化监听
  componentDidMount() {
    $axios_set_default();
    this.watchRouter();
  }
  UNSAFE_componentWillReceiveProps() {
    this.watchRouter();
  }
  watchRouter = () => {
    this.setTitle();
  };
  setTitle = () => {
    const { pathname } = this.props.history.location;
    const route = findRoute(pathname);
    if (route && route.title) {
      window.document.title = route.title;
    }
  };
  render() {
    return <RouterView path="" />;
  }
}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact component={BaseRouter} />
        </Router>
      </Provider>
    );
  }
}
export default App;
