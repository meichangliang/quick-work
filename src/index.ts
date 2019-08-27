const program = require("commander");
const npmInfo = require("../package");

const QAFilter = (val: string): string => {

  return val.toLowerCase();

};


//基础部分
program.version(npmInfo.version).parse(process.argv);

//问答部分
const inquirer = require("inquirer");

import {buildStart} from "./buildStart";

console.info("正在检测运行环境。。。");


const promptList: Array<object> = [
  {
    type: "list",
    message: "请选择你要创建的项目类型",
    name: "projectType",
    choices: [
      {
        name: "WebPC",
        value: "webpc",
      },
      {
        name: "H5",
        value: "webH5",
      },
      {
        name: "小程序",
        value: "MiniPrograms",
      },
    ],
    filter(val: string): string{

      return QAFilter(val);

    },
  },
  {
    type: "list",
    message: "请选择要使用的框架",
    name: "frameType",
    choices: [
      {
        name: "React",
        value: "React",
      },
    ],
    filter(val: string): string{

      return QAFilter(val);

    },
  },
];


inquirer.prompt(promptList).then((answers: object) => {

  buildStart(answers);

});

// 下载模块
