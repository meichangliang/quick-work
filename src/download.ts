const request = require("request");
const fs = require("fs");
const single_log = require("./single_log");

class DownLoad{

  constructor(file_url: string, name: string){

    this.file_url = file_url;
    this.fileName = name;
    this.nowLen = 0;
    this.maxLen = 0;

  }
  file_url: string;
  fileName: string;
  nowLen: number;
  maxLen: number;
  render(callback: Function, end: Function): any{

    const req: any = request({
      method: "GET",
      uri: this.file_url,
    });

    req.pipe(fs.createWriteStream(this.fileName));
    req.on("data", (chunk: any) => {

      this.nowLen += chunk.length;
      callback({
        nowLen: this.nowLen,
        maxLen: this.maxLen,
      });

    });
    req.on("end", () => {

      end();

    });
    req.on("response", (data: any) => {

      const maxLen = data.headers["content-length"];
      if(maxLen){

        this.maxLen = Number(maxLen);

      } else {

        console.error("没有获取到len");

      }
      callback({
        nowLen: this.nowLen,
        maxLen: this.maxLen,
      });

    });

  }

}

interface Param{
  filePath: string;
  fileName: string;
  finish: Function;
}

const DownLoadFile = ({filePath, fileName, finish}: Param): void => {

  const file_url = filePath;
  const ProgressBar = new single_log("下载进度", 50);
  const dow = new DownLoad(file_url, fileName);
  dow.render((param: {
    [propName: string]: number;
  }) => {

    ProgressBar.render({
      completed: param.nowLen,
      total: param.maxLen,
    });

  }, () => {

    finish();

  });

};


module.exports = DownLoadFile;


