import {DownLoadFile} from "./utils/download";
import {cachePath} from "./config/baseUrl";


const downLoad_webapp = (): void => {

  const localPath = cachePath;
  DownLoadFile({
    filePath: "https://github.com/meichangliang/Public_React_WebApp_TS/archive/master.zip",
    fileName: `${localPath}/1234.zip`,
    finish(){

      console.log("下载完成");

    },
  });


};

const downLoad_wxapp = (): void => {

};

export const buildStart = (param: {projectType: string}): void => {

  switch (param.projectType){

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


