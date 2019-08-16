// #!/usr/bin / env node
const commander = require("commander");
const inquirer = require("inquirer");

const initAction = (): void => {

  inquirer
    .prompt([
      {
        "type": "input",
        "message": "请输入项目名称:",
        "name": "name",
      },
    ])
    .then((answers) => {

      console.info("项目名为：", answers.name);
      console.info("正在拷贝项目，请稍等");

    });

};
commander.version(require("../package.json").version);
commander
  .command("init")
  .description("创建项目")
  .action(initAction);
commander.parse(process.argv);


const object = {
  "foo": "bar",
  "baz": 42,
  "qux-lorem": true,
};


const str = `123${object}hahah `;


function name(params: string): void {

  console.log(params);

}
