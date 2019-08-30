"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
const npmInfo = require("../package");
const QAFilter = (val) => {
    return val.toLowerCase();
};
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
        filter(val) {
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
        filter(val) {
            return QAFilter(val);
        },
    },
];
inquirer.prompt(promptList).then((answers) => {
    buildStart_1.buildStart(answers);
});
//# sourceMappingURL=index.js.map