(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global["office-print"] = factory());
})(this, function() {
  "use strict";var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

  class Http {
    constructor() {
      __publicField(this, "host", "localhost");
      __publicField(this, "port", 8888);
    }
    // 发送文件
    sendFile(file) {
      return __async(this, null, function* () {
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open("POST", `http://${this.host}:${this.port}/upload`);
          xhr.onload = () => {
            if (xhr.status === 200) {
              let res = JSON.parse(xhr.responseText);
              if (res.status == 0) {
                resolve(res.data);
              } else {
                reject(res.message);
              }
            } else {
              reject(xhr.responseText);
            }
          };
          xhr.onerror = () => {
            reject(xhr.responseText);
          };
          const formData = new FormData();
          formData.append("file", file);
          xhr.send(formData);
        });
      });
    }
    // 打印文件
    printFile(path) {
      return __async(this, null, function* () {
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open("POST", `http://${this.host}:${this.port}/print`);
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.onload = () => {
            if (xhr.status === 200) {
              let res = JSON.parse(xhr.responseText);
              if (res.status == 0) {
                resolve(res.data);
              } else {
                reject(res.message);
              }
            } else {
              reject(xhr.responseText);
            }
          };
          xhr.send(JSON.stringify({ path }));
        });
      });
    }
  }
  class OfficePrint {
    constructor() {
      __publicField(this, "http");
      this.http = new Http();
    }
    print(file) {
      return __async(this, null, function* () {
        try {
          let res = yield this.sendFile(file);
          return yield this.printFile(res.path);
        } catch (e) {
          this.showDownloadTip();
        }
      });
    }
    // 发送文件
    sendFile(file) {
      return __async(this, null, function* () {
        return this.http.sendFile(file);
      });
    }
    // 打印文件
    printFile(path) {
      return __async(this, null, function* () {
        return this.http.printFile(path);
      });
    }
    // 显示下载提示
    showDownloadTip() {
      let tip = document.createElement("div");
      tip.className = "download-tip";
      tip.innerHTML = `<h1>打印精灵服务不正常</h1><p>未检测到打印精灵服务正常运行，请启动打印精灵或者<a target="_blank" href="https://www.innben.com/print">下载安装</a>后再次重试。</p>`;
      document.body.appendChild(tip);
      setTimeout(() => {
        document.body.removeChild(tip);
      }, 5e3);
    }
  }
  return OfficePrint;
});
