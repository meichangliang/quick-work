#!/usr/bin/env node
const program = require('commander');
program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza');
program.parse(process.argv);
if (program.debug) {
  console.info(program.opts());
}
console.info('pizza details:');
if (program.small) {
  console.info('- small pizza size');
}
if (program.pizzaType) {
  console.info(`- ${program.pizzaType}`);
}
