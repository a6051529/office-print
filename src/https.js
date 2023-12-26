export default class Http {
    host = 'localhost';
    port = 8888;
    constructor(options) {
        this.host = options.host || this.host;
    }
    // 发送文件
    async sendFile(file) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', `http://${this.host}:${this.port}/sendFile`);
            xhr.onload = () => {
                if (xhr.status === 200) {
                    let res = JSON.parse(xhr.responseText);
                    if (res.status == 0) {
                        resolve(res.data);
                    }
                    else {
                        reject(res.message);
                    }
                }
                else {
                    reject(xhr.responseText);
                }
            };
            xhr.onerror = () => {
                reject(xhr.responseText);
            };
            const formData = new FormData();
            formData.append('file', file);
            xhr.send(formData);
        });
    }
    // 打印文件
    async printFile(path) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', `http://${this.host}:${this.port}/printFile`);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = () => {
                if (xhr.status === 200) {
                    let res = JSON.parse(xhr.responseText);
                    if (res.status == 0) {
                        resolve(res.data);
                    }
                    else {
                        reject(res.message);
                    }
                }
                else {
                    reject(xhr.responseText);
                }
            };
            xhr.send(JSON.stringify({ path }));
        });
    }
}
