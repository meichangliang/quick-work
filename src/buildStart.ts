export const buildStart = (param: object): void => {

  switch (param.projectType){

    case "webpc":
      console.log("PC");

      break;
    case "webh5":
      console.log("H5");
      break;

    case "miniprograms":
      console.log("小程序");
      break;

    default:
      break;

  }

};

