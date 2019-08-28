declare const slog: any;
interface Render {
    completed: number;
    total: number;
}
declare class ProgressBar {
    constructor(description: string, bar_length: number);
    description: string;
    length: number;
    render: (opts: Render) => void;
}
