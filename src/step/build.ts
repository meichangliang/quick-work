/* eslint-disable max-lines-per-function */
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
  //隐藏文件的复制


  shell.cp(
    `${param.projectPath + path.sep}.babelrc`,
    `${buildPath}.babelrc`
  );

  shell.cp(
    `${param.projectPath + path.sep}.env`,
    `${buildPath}.env`
  );

  shell.cp(
    `${param.projectPath + path.sep}.eslintignore`,
    `${buildPath}.eslintignore`
  );

  shell.cp(
    `${param.projectPath + path.sep}.eslintrc.js`,
    `${buildPath}.eslintrc.js`
  );

  shell.cp(
    `${param.projectPath + path.sep}.gitignore`,
    `${buildPath}.gitignore`
  );

  shell.cp(
    `${param.projectPath + path.sep}.npmrc`,
    `${buildPath}.npmrc`
  );

  shell.cp(
    `${param.projectPath + path.sep}.prettierignore`,
    `${buildPath}.prettierignore`
  );

  child.exec(`code ${buildPath}`);

};

