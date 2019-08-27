const program  = require("commander");
const npmInfo = require("../package");
// program.version(npmInfo.version, "-v", "--version").parse(process.argv);
program.version(npmInfo.version).parse(process.argv)
;