"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
const npmInfo = require("../package");
const mkdir_1 = require("./utils/mkdir");
const os = require("os");
const homedir = os.homedir();
const localPath = `${homedir}/quick-work`;
mkdir_1.mkdir(localPath);
program.version(npmInfo.version).parse(process.argv);
const inquirer = require("inquirer");
const buildStart_1 = require("./buildStart");
const promptList = [
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
inquirer.prompt(promptList).then((answers) => {
    buildStart_1.buildStart(answers);
});
//# sourceMappingURL=index.js.map