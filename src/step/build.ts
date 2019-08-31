const shell = require("shelljs");
const path = require("path");
import {mkdir} from "../utils/mkdir";

export const buildProject = (param: any): void => {

  const srcPath = `${param.projectPath + path.sep}*`;
  let buildPath = param.buildPath + path.sep;

  if(param.projectName){

    buildPath += param.projectName + path.sep;
    mkdir(buildPath);

  }


  shell.cp("-R", srcPath, buildPath);


  //隐藏目录
  const _srcPath = `${param.projectPath + path.sep}.vscode${path.sep}*`;
  const _buildPath = `${buildPath}.vscode${path.sep}`;
  mkdir(_buildPath);
  shell.cp("-R", _srcPath, _buildPath);

};

