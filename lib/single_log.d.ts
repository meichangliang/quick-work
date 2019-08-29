interface Render {
    completed: number;
    total: number;
}
export declare class ProgressBar {
    constructor(description: string, bar_length: number);
    description: string;
    length: number;
    render: (opts: Render) => void;
}
export {};
