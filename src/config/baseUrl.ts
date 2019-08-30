const os = require("os");
const homedir = os.homedir();
const path = require("path");
export const cachePath = `${homedir}${path.sep}quick-work`;
