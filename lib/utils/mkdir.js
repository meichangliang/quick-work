"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
exports.mkdir = (dirpath, dirname) => {
    if (typeof dirname === "undefined") {
        if (fs.existsSync(dirpath)) {
        }
        else {
            exports.mkdir(dirpath, path.dirname(dirpath));
        }
    }
    else {
        if (dirname !== path.dirname(dirpath)) {
            exports.mkdir(dirpath);
            return;
        }
        if (fs.existsSync(dirname)) {
            fs.mkdirSync(dirpath);
        }
        else {
            exports.mkdir(dirname, path.dirname(dirname));
            fs.mkdirSync(dirpath);
        }
    }
};
//# sourceMappingURL=mkdir.js.map