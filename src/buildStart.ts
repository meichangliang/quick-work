const child = require("child_process");

const downLoad_webapp = (): void => {

  console.info("正在当前目录构架应用程序。。。");


  // child.exec(
  //   "git clone https://github.com/meichangliang/Public_React_WebApp_TS.git"
  //   , function (err: any, sto: any){

  //     console.log("构建完毕");
  //     if(err){

  //       console.error(err);

  //     }
  //     if(sto){

  //       console.log(sto);

  //     }

  //   }
  // );


};

const downLoad_wxapp = (): void => {

};

export const buildStart = (param: {projectType: string}): void => {

  switch (param.projectType){

    case "webpc":
      downLoad_webapp();
      break;
    case "webh5":
      downLoad_webapp();
      break;

    case "miniprograms":
      downLoad_wxapp();
      break;

    default:
      break;

  }

};


// 引入工具模块
const ProgressBar = require("./single_log");

// 初始化一个进度条长度为 50 的 ProgressBar 实例
const pb = new ProgressBar("下载进度", 50);

// 这里只是一个 pb 的使用示例，不包含任何功能
let num = 0;
const total = 200;
function downloading(): void{

  if(num <= total){

    // 更新进度条
    pb.render({completed: num,
      total});

    num += 1;
    setTimeout(function (){

      downloading();

    }, 100);

  } else {

    //执行完毕
    console.log("执行完毕");

  }

}
downloading();

