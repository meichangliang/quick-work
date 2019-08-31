"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os = require("os");
const homedir = os.homedir();
const path = require("path");
exports.cachePath = `${homedir}${path.sep}quick-work`;
//# sourceMappingURL=baseUrl.js.map