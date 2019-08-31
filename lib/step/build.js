"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shell = require("shelljs");
const path = require("path");
const mkdir_1 = require("../utils/mkdir");
exports.buildProject = (param) => {
    const srcPath = `${param.projectPath + path.sep}*`;
    let buildPath = param.buildPath + path.sep;
    if (param.projectName) {
        buildPath += param.projectName + path.sep;
        mkdir_1.mkdir(buildPath);
    }
    shell.cp("-R", srcPath, buildPath);
};
//# sourceMappingURL=build.js.map