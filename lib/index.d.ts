export default class OfficePrint {
    private http;
    constructor();
    print(file: File): Promise<unknown>;
    sendFile(file: File): Promise<unknown>;
    printFile(path: string): Promise<unknown>;
    showDownloadTip(): void;
}
