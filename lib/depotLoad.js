"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const download_1 = require("./utils/download");
const baseUrl_1 = require("./config/baseUrl");
const unzip = require("unzip");
const fs = require("fs");
let timer;
const downLoad_webapp = (callback) => {
    const localPath = `${baseUrl_1.cachePath}/react-web-app.zip`;
    console.info("正在从远程服务器获取文件,请稍后.....");
    download_1.DownLoadFile({
        filePath: "https://github.com/meichangliang/Public_React_WebApp_TS/archive/master.zip",
        fileName: localPath,
        finish() {
            console.info("正在解压缩...");
            fs.createReadStream(localPath).pipe(unzip.Parse()).on("entry", (entry) => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    const fileName = entry.path.split("/")[0];
                    callback(fileName);
                }, 300);
            });
        },
    });
};
const downLoad_wxapp = (callback) => {
};
exports.depotLoad = (param, callback) => {
    switch (param.projectType) {
        case "webPc":
            downLoad_webapp((param) => {
                callback(param);
            });
            break;
        case "webH5":
            downLoad_webapp((param) => {
                callback(param);
            });
            break;
        case "MiniPrograms":
            downLoad_wxapp((param) => {
                callback(param);
            });
            break;
        default:
            break;
    }
};
//# sourceMappingURL=depotLoad.js.map