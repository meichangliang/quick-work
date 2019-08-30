"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const download_1 = require("./utils/download");
const baseUrl_1 = require("./config/baseUrl");
const downLoad_webapp = () => {
    const localPath = baseUrl_1.cachePath;
    download_1.DownLoadFile({
        filePath: "https://github.com/meichangliang/Public_React_WebApp_TS/archive/master.zip",
        fileName: `${localPath}/1234.zip`,
        finish() {
            console.log("下载完成");
        },
    });
};
const downLoad_wxapp = () => {
};
exports.buildStart = (param) => {
    switch (param.projectType) {
        case "webPc":
            downLoad_webapp();
            break;
        case "webH5":
            downLoad_webapp();
            break;
        case "MiniPrograms":
            downLoad_wxapp();
            break;
        default:
            break;
    }
};
//# sourceMappingURL=buildStart.js.map