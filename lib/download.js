"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const fs = require("fs");
const single_log_1 = require("./single_log");
class DownLoad {
    constructor(file_url, name) {
        this.file_url = file_url;
        this.fileName = name;
        this.nowLen = 0;
        this.maxLen = 10000;
    }
    render(callback, end) {
        const req = request({
            method: "GET",
            uri: this.file_url,
        });
        req.pipe(fs.createWriteStream(this.fileName));
        req.on("data", (chunk) => {
            this.nowLen += chunk.length;
            callback({
                nowLen: this.nowLen,
                maxLen: this.maxLen,
            });
        });
        req.on("end", () => {
            end();
        });
        req.on("response", (data) => {
            const maxLen = data.headers["content-length"];
            if (maxLen) {
                this.maxLen = Number(maxLen);
            }
            callback({
                nowLen: this.nowLen,
                maxLen: this.maxLen,
            });
        });
    }
}
exports.DownLoadFile = ({ filePath, fileName, finish }) => {
    const file_url = filePath;
    const pb = new single_log_1.ProgressBar("下载进度", 50);
    const dow = new DownLoad(file_url, fileName);
    dow.render((param) => {
        pb.render({
            completed: param.nowLen,
            total: param.maxLen,
        });
    }, () => {
        finish();
    });
};
//# sourceMappingURL=download.js.map