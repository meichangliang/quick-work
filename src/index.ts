const program = require("commander");
const npmInfo = require("../package");
import {mkdir} from "./utils/mkdir";

//不管三七二十一.先创建一个缓存目录
const os = require("os");
const homedir = os.homedir();
const localPath = `${homedir}/quick-work`;
mkdir(localPath);


//基础部分
program.version(npmInfo.version).parse(process.argv);

//问答部分
const inquirer = require("inquirer");
import {depotLoad} from "./step/depotLoad";
const promptList: Array<object> = [
  {
    type: "list",
    message: "请选择你要创建的项目类型",
    name: "projectType",
    choices: [
      {
        name: "WebPC",
        value: "webPc",
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
  },
];
inquirer.prompt(promptList).then((answers: {
  projectType: string;
  [propName: string]: string;
}) => {

  depotLoad(answers, (param: string) => {

    //文件下载并解压结束目录为
    console.log("文件下载并解压结束目录为");
    console.log(`${localPath}/${param}`);

  });

});


