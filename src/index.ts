import Http from "./https";

export default class OfficePrint {
    private http: Http;
    constructor(options :  {host: string} = {host: ''}) {
        this.http = new Http({host: options.host});
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
        try {
            return this.http.sendFile(file);
        } catch (e) {
            this.showDownloadTip();
        }
    }

    // 打印文件
    async printFile(path: string){
        try {
            return this.http.printFile(path);
        } catch (e) {
            this.showDownloadTip();
        }
    }

    // 显示下载提示
    showDownloadTip(){
        let tip = document.createElement('div');
        // css 画出关闭 图标


        tip.className = 'download-tip';
        tip.innerHTML = `<div style="text-align: center;padding: 20px; width: 400px;background: #fff;">
            <img style="width: 80px;margin-bottom: 10px;" src="data:image/png;base64,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">
            <h1 style="text-align:center;">打印出错</h1>
            <p style="text-align: justify;color: red;">未检测到打印精灵服务正常运行，请启动打印精灵或者<a target="_blank" href="https://www.innben.com/print">下载安装</a>后再次重试。</p>
            <button onclick="document.body.removeChild(document.querySelector('.download-tip'))">关闭</button>
        </div>`;
        // 设置div的css样式
        tip.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            z-index: 999999;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,.5);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 16px;
        `;
        document.body.appendChild(tip);
    }
}