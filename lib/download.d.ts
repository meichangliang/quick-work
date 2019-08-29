declare const request: any;
declare const fs: any;
declare const single_log: any;
declare class DownLoad {
    constructor(file_url: string, name: string);
    file_url: string;
    fileName: string;
    nowLen: number;
    maxLen: number;
    render(callback: Function, end: Function): any;
}
interface Param {
    filePath: string;
    fileName: string;
    finish: Function;
}
declare const DownLoadFile: ({ filePath, fileName, finish }: Param) => void;
