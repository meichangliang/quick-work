const routes: routes = {
  '/': {
    name: '首页',
    title: '首页',
    describe: '这里是首页',
  },
  '/home': {
    name: '首页',
    title: '落地页',
    describe: '这里是home页面',
    routes: {
      '/home/detail': {
        name: '详情页面',
      },
    },
  },
  '/demo': {
    name: 'demo页面',
    title: '演示页面',
    describe: '演示demo',
    routes: {
      '/demo/hello_ts': {
        name: 'TS 基础功能 演示',
      },
      '/demo/mobx': {
        name: 'mobx 演示',
        title: 'mobx 演示',
      },
      '/demo/request': {
        name: 'ajax 异步请求以及 Promise + await 演示',
      },
      '/demo/style_demo': {
        name: 'style 演示 + 三级路由渲染测试',
        routes: {
          '/demo/style_demo/css_demo': {
            name: 'css module 演示',
            component: require('@/pages/demo/style_demo/css_demo'),
          },
          '/demo/style_demo/less_demo': {
            name: 'less module 演示',
          },
          '/demo/style_demo/scss_demo': {
            name: 'scss module 演示',
          },
        },
      },
    },
  },
  '*': {
    name: '404',
    title: 'NotFound',
    describe: '404页面',
  },
};

export default routes;
