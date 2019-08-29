"use strict";
const axios = require("axios");
const fs = require("fs");
const url = "https://github.com/meichangliang/Public_React_WebApp_TS/archive/master.zip";
axios({
    url,
    method: "get",
    responseType: "blob",
    onDownloadProgress(progressEvent) {
        console.info(progressEvent);
    },
}).then((res) => {
    if (res.status - 200 === 0) {
        const etag = res.headers["content-disposition"];
        const fileName = etag.split("filename=")[1];
        const data = res.data;
        fs.writeFile(fileName, data, function (err) {
            if (err) {
                throw err;
            }
            console.log("Hello.");
        });
        console.log("下载完毕");
    }
    else {
        console.info("下载失败，请重新尝试！");
    }
});
//# sourceMappingURL=axiosDownLoad.js.map