"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
const npmInfo = require("../package");
const mkdir_1 = require("./utils/mkdir");
const inquirer = require("inquirer");
const os = require("os");
const homedir = os.homedir();
const localPath = `${homedir}/quick-work`;
mkdir_1.mkdir(localPath);
program.version(npmInfo.version).parse(process.argv);
const depotLoad_1 = require("./step/depotLoad");
const projectQA = [
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
const developQA = [
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
const projectNameQA = [
    {
        type: "input",
        message: "请输入项目的名称",
        name: "projectName",
        default: "public-react-webapp-ts",
    },
];
const _start = () => {
    return new Promise((resolve) => {
        inquirer.prompt(projectQA).then((answers) => {
            depotLoad_1.depotLoad(answers, (param) => {
                resolve(param);
            });
        });
    });
};
const _develop = () => {
    return new Promise((resolve) => {
        inquirer.prompt(developQA).then((pram) => {
            resolve(pram);
        });
    });
};
const _projectName = () => {
    return new Promise((resolve) => {
        inquirer.prompt(projectNameQA).then((pram) => {
            resolve(pram);
        });
    });
};
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const projectPath = yield _start();
    const developResult = yield _develop();
    let QAresult = Object.assign({}, developResult);
    if (!developResult.rootDir) {
        const projectName = yield _projectName();
        QAresult = Object.assign(Object.assign({}, QAresult), projectName);
    }
    QAresult.projectPath = projectPath;
    console.log(QAresult);
});
main();
//# sourceMappingURL=index.js.map