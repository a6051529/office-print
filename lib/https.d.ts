export default class Http {
    host: string;
    port: number;
    constructor(options: {
        host: string;
    });
    sendFile(file: File): Promise<unknown>;
    printFile(path: string): Promise<unknown>;
}
