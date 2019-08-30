const request = require("request");
const fs = require("fs");
import {ProgressBar} from "./single_log";

class DownLoad{

  constructor(file_url: string, name: string){

    this.file_url = file_url;
    this.fileName = name;
    this.nowLen = 0;
    this.maxLen = 10000;

  }
  file_url: string;
  fileName: string;
  nowLen: number;
  maxLen: number;
  req: any;
  start(callback: Function): void{

    this.req = request({
      method: "GET",
      uri: this.file_url,
    });

    this.req.on("response", (data: any) => {

      const maxLen = data.headers["content-length"];
      if(maxLen){

        this.maxLen = Number(maxLen);
        callback(true);

      } else {

        this.start(callback);
        callback(false);

      }

    });

  }
  render(callback: Function, end: Function): any{

    this.start((param: boolean) => {

      if(param){

        callback({
          nowLen: this.nowLen,
          maxLen: this.maxLen,
        });
        this.req.pipe(fs.createWriteStream(this.fileName));
        this.req.on("data", (chunk: any) => {

          this.nowLen += chunk.length;
          callback({
            nowLen: this.nowLen,
            maxLen: this.maxLen,
          });

        });
        this.req.on("end", () => {

          end();

        });

      }

    });

  }

}

interface Param{
  filePath: string;
  fileName: string;
  finish: Function;
}

export const DownLoadFile = ({filePath, fileName, finish}: Param): void => {

  const file_url = filePath;
  const pb = new ProgressBar("下载进度", 50);
  const dow = new DownLoad(file_url, fileName);
  dow.render((param: {
    [propName: string]: number;
  }) => {

    pb.render({
      completed: param.nowLen,
      total: param.maxLen,
    });

  }, () => {

    finish();

  });

};


