"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const download_1 = require("./utils/download");
const baseUrl_1 = require("./config/baseUrl");
const unzip = require("unzip");
const fs = require("fs");
const downLoad_webapp = () => {
    const localPath = `${baseUrl_1.cachePath}/react-web-app.zip`;
    download_1.DownLoadFile({
        filePath: "https://github.com/meichangliang/Public_React_WebApp_TS/archive/master.zip",
        fileName: localPath,
        finish() {
            fs.createReadStream(localPath).pipe(unzip.Extract({ path: baseUrl_1.cachePath }));
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
//# sourceMappingURL=git.js.map