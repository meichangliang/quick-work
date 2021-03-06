const fs = require("fs");
const path = require("path");

export const mkdir = (dirpath: string, dirname?: string): void => {

  //判断是否是第一次调用
  if(typeof dirname === "undefined"){

    if(fs.existsSync(dirpath)){
      //Do something
    } else {

      mkdir(dirpath, path.dirname(dirpath));

    }

  } else {

    //判断第二个参数是否正常，避免调用时传入错误参数
    if(dirname !== path.dirname(dirpath)){

      mkdir(dirpath);
      return;

    }
    if(fs.existsSync(dirname)){

      fs.mkdirSync(dirpath);

    } else {

      mkdir(dirname, path.dirname(dirname));
      fs.mkdirSync(dirpath);

    }

  }

};

