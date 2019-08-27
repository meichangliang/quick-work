"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child = require("child_process");
const downLoad_webapp = () => {
    console.info("正在当前目录构架应用程序。。。");
    child.exec("git clone https://github.com/meichangliang/Public_React_WebApp_TS.git", function (err, sto) {
        console.log("构建完毕");
        if (err) {
            console.error(err);
        }
        if (sto) {
            console.log(sto);
        }
    });
};
const downLoad_wxapp = () => {
};
exports.buildStart = (param) => {
    switch (param.projectType) {
        case "webpc":
            downLoad_webapp();
            break;
        case "webh5":
            downLoad_webapp();
            break;
        case "miniprograms":
            downLoad_wxapp();
            break;
        default:
            break;
    }
};
//# sourceMappingURL=buildStart.js.map