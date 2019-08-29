"use strict";
const request = require("request");
const fs = require("fs");
const single_log = require("./single_log");
class DownLoad {
    constructor(file_url, name) {
        this.file_url = file_url;
        this.fileName = name;
        this.nowLen = 0;
        this.maxLen = 0;
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
            else {
                console.error("没有获取到len");
            }
            callback({
                nowLen: this.nowLen,
                maxLen: this.maxLen,
            });
        });
    }
}
const DownLoadFile = ({ filePath, fileName, finish }) => {
    const file_url = filePath;
    const ProgressBar = new single_log("下载进度", 50);
    const dow = new DownLoad(file_url, fileName);
    dow.render((param) => {
        ProgressBar.render({
            completed: param.nowLen,
            total: param.maxLen,
        });
    }, () => {
        finish();
    });
};
module.exports = DownLoadFile;
//# sourceMappingURL=download.js.map