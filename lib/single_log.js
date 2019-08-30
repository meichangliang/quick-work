"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const slog = require("single-line-log").stdout;
class ProgressBar {
    constructor(description, bar_length) {
        this.render = (opts) => {
            const percent = (opts.completed / opts.total).toFixed(4);
            const cell_num = Math.floor(Number(percent) * this.length);
            let cell = "";
            for (let i = 0; i < cell_num; i++) {
                cell += "-";
            }
            let empty = "";
            for (let i = 0; i < this.length - cell_num; i++) {
                empty += "#";
            }
            const cmdText = `${this.description}: ${(100 * Number(percent)).toFixed(2)}% ${cell}${empty} ${opts.completed}/${opts.total} \n`;
            slog(cmdText);
        };
        this.description = description || "Progress";
        this.length = bar_length || 25;
    }
}
exports.ProgressBar = ProgressBar;
//# sourceMappingURL=single_log.js.map