"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const downLoad_webapp = () => {
    console.info("正在当前目录构建应用程序。。。");
    const DownLoadFile = require("./download");
    DownLoadFile({
        filePath: "https://github.com/meichangliang/Public_React_WebApp_TS/archive/master.zip",
        fileName: "xxxx.zip",
        finish() {
            console.log("下载完成");
        },
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