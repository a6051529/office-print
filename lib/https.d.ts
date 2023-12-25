export default class Http {
    host: string;
    port: number;
    sendFile(file: File): Promise<unknown>;
    printFile(path: string): Promise<unknown>;
}
