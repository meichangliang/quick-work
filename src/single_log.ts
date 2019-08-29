const slog = require("single-line-log").stdout;

interface Render {
    completed: number;
    total: number;
}

class ProgressBar{

  constructor(description: string, bar_length: number){

    this.description = description || "Progress";
    this.length = bar_length || 25;

  }
  description: string;
  length: number;
  render = (opts: Render): void => {

    const percent: string = (opts.completed / opts.total).toFixed(4);
    const cell_num = Math.floor(Number(percent) * this.length);
    let cell = "";
    for(let i = 0; i < cell_num; i++){

      cell += "-";

    }
    let empty = "";
    for(let i = 0; i < this.length - cell_num; i++){

      empty += "#";

    }
    const cmdText = `${this.description}: ${(100 * Number(percent)).toFixed(2)}% ${cell}${empty} ${opts.completed}/${opts.total}`;
    slog(cmdText);

  };

}

module.exports = ProgressBar;
