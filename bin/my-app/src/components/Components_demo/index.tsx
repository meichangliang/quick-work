/*
 * @LastEditors: Mark
 * @Description:
 * @Author: Mark
 * @Date: 2019-04-15 01:23:08
 * @LastEditTime: 2019-05-25 15:46:35
 */
import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';
/**
 * @description:
 * @param: <Search_input my-class="Search_Box" />
 * @return:
 */
class Components_demo extends Component {
  static externalClasses = ['my-class'];
  static propTypes = {
    list: PropTypes.array,
  };
  static defaultProps = {
    list: [
      {
        cover: 'https://meichangliang.github.io/static/image/life/sven.jpg',
        title:
          '这里是title,这里是title,这里是title,这里是title,这里是title,这里是title,',
        lb_text: '这里是左边的数据',
        rb_text: '右边的数据',
      },
      {
        cover: 'https://meichangliang.github.io/static/image/life/sven.jpg',
        title:
          '这里是title,这里是title,这里是title,这里是title,这里是title,这里是title,',
        lb_text: '这里是左边的数据',
        rb_text: '右边的数据',
      },
    ],
  };
  componentWillMount() {}

  componentWillReact() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  render() {
    const { list }: any = this.props;

    return (
      <View className="wrapper my-class">
        这里是一个组件
        {list.map((item, index) => {
          return <View key={index}>{item.title}</View>;
        })}
      </View>
    );
  }
}

export default Components_demo;
