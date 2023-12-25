import Http from "./https";

export default class OfficePrint {
    private http: Http;
    constructor() {
        this.http = new Http();
    }

    async print(file: File){
        try {
            let res = await this.sendFile(file) as {path: string};
            return await this.printFile(res.path);
        } catch (e) {
            this.showDownloadTip();
        }
    }

    // 发送文件
    async sendFile(file: File){
        return this.http.sendFile(file);
    }

    // 打印文件
    async printFile(path: string){
        return this.http.printFile(path);
    }

    // 显示下载提示
    showDownloadTip(){
        let tip = document.createElement('div');
        tip.className = 'download-tip';
        tip.innerHTML = `<h1>打印精灵服务不正常</h1><p>未检测到打印精灵服务正常运行，请启动打印精灵或者<a target="_blank" href="https://www.innben.com/print">下载安装</a>后再次重试。</p>`;
        document.body.appendChild(tip);
        setTimeout(() => {
            document.body.removeChild(tip);
        }, 5000);
    }
}