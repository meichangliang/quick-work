/*
* @LastEditors: Mark
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-04-22 11:41:56
* @LastEditTime: 2019-05-21 18:39:28
 */
export const typeList = [
  {
    id: 1,
    name: '篮球',
  },
  {
    id: 2,
    name: '羽毛球',
  },
  {
    id: 3,
    name: '足球',
  },
  {
    id: 4,
    name: '棒球',
  },
  {
    id: 5,
    name: '健身房',
  },
  {
    id: 6,
    name: '高尔夫',
  },
];

export const sportsType_Find = ({ id, name }) => {
  let returnObj = {};
  if (id) {
    for (let i = 0; i < typeList.length; i++) {
      const el = typeList[i];
      if (el.id === id) {
        returnObj = el;
        break;
      }
    }
  } else if (name) {
    for (let i = 0; i < typeList.length; i++) {
      const el = typeList[i];
      if (el.name === name) {
        returnObj = el;
        break;
      }
    }
  }
  return returnObj;
};

export const render_pay_status = (status) => {
  let name = '';
  let color = '';
  switch (Number(status)) {
    case 1:
      name = '待付款';
      color = 'red';
      break;
    case 2:
      name = '已支付';
      color = 'green';
      break;
    case 5:
      name = '交易成功';
      color = 'green';
      break;
    case -1:
      name = '已取消';
      color = 'gray';
      break;
    case -2:
      name = '交易关闭';
      color = 'black';
      break;
    default:
      break;
  }
  return {
    name,
    color,
  };
};
