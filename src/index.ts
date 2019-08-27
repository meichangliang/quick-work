const program  = require("commander");
const npmInfo = require("../package");
// program.version(npmInfo.version, "-v", "--version").parse(process.argv);
program.version(npmInfo.version).parse(process.argv);

const inquirer = require("inquirer");
const promptList: Array<object> = [
  // 具体交互内容
];

inquirer.prompt(promptList).then((answers: any) => {

  console.log(answers); // 返回的结果

});

