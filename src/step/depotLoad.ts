import {DownLoadFile} from "../utils/download";
import {cachePath} from "../config/baseUrl";
const unzip = require("unzip");
const fs = require("fs");
const path = require("path");


//H5 |  webApp
const downLoad_webapp = (callback: Function): void => {

  const localPath = `${cachePath}${path.sep}react-web-app.zip`;
  console.info("正在从远程服务器获取文件,请稍后.....");
  DownLoadFile({
    filePath: "https://github.com/meichangliang/Public_React_WebApp_TS/archive/master.zip",
    fileName: localPath,
    finish(){

      console.info("正在解压缩...");
      fs.createReadStream(localPath)
        .pipe(unzip.Extract({path: cachePath}))
        .on("close", () => {

          callback(`${cachePath}${path.sep}Public_React_WebApp_TS-master`);

        });


    },
  });

};

//wxapp
const downLoad_wxapp = (callback: Function): void => {

};

export const depotLoad = (param: {projectType: string}, callback: Function): void => {

  switch (param.projectType){

    case "webPc":
      downLoad_webapp((param: string) => {

        callback(param);

      });
      break;
    case "webH5":
      downLoad_webapp((param: string) => {

        callback(param);

      });
      break;
    case "MiniPrograms":
      downLoad_wxapp((param: string) => {

        callback(param);

      });
      break;
    default:
      break;

  }

};


