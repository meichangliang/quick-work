const shell = require("shelljs");
const path = require("path");
import {mkdir} from "../utils/mkdir";
const child = require("child_process");

export const buildProject = (param: any): void => {

  const srcPath = `${param.projectPath + path.sep}*`;
  let buildPath = param.buildPath + path.sep;

  if(param.projectName){

    buildPath += param.projectName + path.sep;
    mkdir(buildPath);

  }


  shell.cp("-R", srcPath, buildPath);

  //隐藏目录的复制粘贴
  const _srcPath = `${param.projectPath + path.sep}.vscode${path.sep}*`;
  const _buildPath = `${buildPath}.vscode${path.sep}`;
  mkdir(_buildPath);
  shell.cp("-R", _srcPath, _buildPath);


  child.exec(`code${buildPath}`);
  child.exec(`cd ${buildPath} && npm ci`, (err: any, sto: any) => {

    console.error(err);
    console.info(sto);

  });


};

