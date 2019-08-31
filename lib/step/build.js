"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shell = require("shelljs");
const path = require("path");
const mkdir_1 = require("../utils/mkdir");
const child = require("child_process");
exports.buildProject = (param) => {
    const srcPath = `${param.projectPath + path.sep}*`;
    let buildPath = param.buildPath + path.sep;
    if (param.projectName) {
        buildPath += param.projectName + path.sep;
        mkdir_1.mkdir(buildPath);
    }
    shell.cp("-R", srcPath, buildPath);
    const _srcPath = `${param.projectPath + path.sep}.vscode${path.sep}*`;
    const _buildPath = `${buildPath}.vscode${path.sep}`;
    mkdir_1.mkdir(_buildPath);
    shell.cp("-R", _srcPath, _buildPath);
    shell.cp(`${param.projectPath + path.sep}.babelrc`, `${buildPath}.babelrc`);
    shell.cp(`${param.projectPath + path.sep}.env`, `${buildPath}.env`);
    shell.cp(`${param.projectPath + path.sep}.eslintignore`, `${buildPath}.eslintignore`);
    shell.cp(`${param.projectPath + path.sep}.eslintrc.js`, `${buildPath}.eslintrc.js`);
    shell.cp(`${param.projectPath + path.sep}.gitignore`, `${buildPath}.gitignore`);
    shell.cp(`${param.projectPath + path.sep}.npmrc`, `${buildPath}.npmrc`);
    shell.cp(`${param.projectPath + path.sep}.prettierignore`, `${buildPath}.prettierignore`);
    child.exec(`code ${buildPath}`);
};
//# sourceMappingURL=build.js.map