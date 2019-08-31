/*
 * @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-06-17 21:53:38
 * @LastEditTime: 2019-06-18 21:50:38
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'react-app-polyfill/ie9';
import 'normalize.css';
import '@/assets/style/reset.scss';
import { printVersion } from './baseUrl';
import App from './App';
printVersion();
ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
