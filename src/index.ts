const program = require("commander");
const npmInfo = require("../package");
import {mkdir} from "./utils/mkdir";
const inquirer = require("inquirer");
import {buildProject} from "./step/build";

//不管三七二十一.先创建一个缓存目录
const os = require("os");
const homedir = os.homedir();
const localPath = `${homedir}/quick-work`;
mkdir(localPath);


//基础部分
program.version(npmInfo.version).parse(process.argv);

//问答部分
import {depotLoad} from "./step/depotLoad";
const projectQA: Array<object> = [
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


//开始下一步骤的提问: 编辑器\是否以当前目录为根目录
const developQA: Array<object> = [
  {
    type: "list",
    message: "请选择你常用的编辑器",
    name: "editor",
    choices: [
      {
        name: "Visual Studio Code",
        value: "VSCode",
      },
    ],
  },
  {
    type: "confirm",
    message: "是否以当前目录为根目录进行创建?",
    name: "rootDir",
    prefix: "前缀",
  },
];


//项目的名字

const projectNameQA: Array<object> = [
  {
    type: "input",
    message: "请输入项目的名称",
    name: "projectName",
    default: "my-app", // 默认值
  },
];


//构建交互界面
const _start = (): Promise<any> => {

  return new Promise((resolve): any => {

    inquirer.prompt(projectQA).then((answers: any) => {

      depotLoad(answers, (param: string) => {

        resolve(param);

      });

    });

  });


};

const _develop = (): Promise<any> => {

  return new Promise((resolve): any => {

    inquirer.prompt(developQA).then((pram: any) => {

      resolve(pram);

    });

  });

};


const _projectName = (): Promise<any> => {

  return new Promise((resolve): any => {

    inquirer.prompt(projectNameQA).then((pram: any) => {

      resolve(pram);

    });

  });

};


//run
const main = async (): Promise<any> => {

  const projectPath = await _start();
  const developResult = await _develop();
  let QAresult = {
    ...developResult,
  };
  if(!developResult.rootDir){

    const projectName = await _projectName();
    QAresult = {
      ...QAresult,
      ...projectName,
    };

  }

  QAresult.projectPath = projectPath;
  QAresult.buildPath = process.cwd();
  buildProject(QAresult);

};

main();
