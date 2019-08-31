/*
 * @LastEditors: Mark
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-04-26 16:01:28
 * @LastEditTime: 2019-05-25 15:53:27
 */

// let url = 'https://xcx.joywaygym.com'; //生产服
// let url = 'http://ip-27-joyway-app.coralcodes.com'; //测试服
let url = 'https://uat-xcx.joywaygym.com'; //UAT

export const baseUrl = url;

let H5_url = 'https://uat-xcx.joywaygym.com'; //内嵌H5页面的域名

export const WebView_domain = H5_url;

// let image_url = 'https://uat-xcx.joywaygym.com'; //小程序内引用图片的路径
let image_url = ''; //小程序内引用图片的路径

export const image_domain = image_url;

// 版本信息管理
const versionList = [
  {
    code: '0.2.0',
    describe: '支持编译sass',
    user: 'Mark',
  },
  {
    code: '0.1.0',
    describe: 'Public_Taro_weapp',
    user: 'Mark',
  },
];

export const printVersion = () => {
  const version = versionList[0];
  console.groupCollapsed(
    `%c version -- ${version.code}`,
    'font-size:10;color:green;font-weight:bold;'
  );
  console.info(
    `%c describe -- ${version.describe}`,
    'font-size:10;color:green;font-weight:bold;'
  );
  console.info(
    `%c user -- ${version.user}`,
    'font-size:10;color:green;font-weight:bold;'
  );
  console.groupEnd();
};
