export default class OfficePrint {
    private http;
    constructor(options?: {
        host: string;
    });
    print(file: File): Promise<unknown>;
    sendFile(file: File): Promise<unknown>;
    printFile(path: string): Promise<unknown>;
    showDownloadTip(): void;
}
