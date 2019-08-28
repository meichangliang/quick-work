"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child = require("child_process");
const downLoad_webapp = () => {
    console.info("正在当前目录构架应用程序。。。");
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
const ProgressBar = require("./single_log");
const pb = new ProgressBar("下载进度", 50);
let num = 0;
const total = 200;
function downloading() {
    if (num <= total) {
        pb.render({ completed: num,
            total });
        num += 1;
        setTimeout(function () {
            downloading();
        }, 100);
    }
    else {
        console.log("执行完毕");
    }
}
downloading();
//# sourceMappingURL=buildStart.js.map