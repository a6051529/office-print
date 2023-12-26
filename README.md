# office-print

[![build status](https://img.shields.io/travis/com/a6051529/office-print.svg)](https://travis-ci.com/a6051529/office-print)
[![code coverage](https://img.shields.io/codecov/c/github/a6051529/office-print.svg)](https://codecov.io/gh/a6051529/office-print)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/a6051529/office-print.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/office-print.svg)](https://npm.im/office-print)

> 打印精灵，一款用于在网页中打印Office文件的软件，可以打印包括Word、PowerP oint、Excel、PDF、图片等文件。

## Table of Contents

详细信息请访问[https://www.innben.com/print](https://www.innben.com/print)了解

## Install

[npm][]:

```bash
npm install office-print --save
```

[yarn][]:

```sh
yarn add office-print --save
```


## Usage

### 一、打印网络excel、Word、PowerPoint、PDF
```js
const OfficePrint = require('office-print');

let fileUrl = 'your network excel url';
fetch(fileUrl).then(response => response.arrayBuffer()).then(arrayBuffer => {
  	let file = new File([arrayBuffer], filename);
	  const officePrint = new OfficePrint();
		officePrint.print(file)
});
// script
```

### 二、打印本地电脑中的excel、Word、PowerPoint、PDF

```html
<input type="file" id="input">
```

```js
const OfficePrint = require('office-print');

const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
    const fileList = this.files; /* 现在你可以处理文件列表 */
  	fileList.forEach(file => {
			const officePrint = new OfficePrint();
			officePrint.print(file)    
    });
}
// script
```

### 三、已知本地文件路径，直接打印本地电脑中的excel、Word、PowerPoint、PDF
```js
const OfficePrint = require('office-print');

let fileUrl = 'your local file system excel url';
const officePrint = new OfficePrint();
			officePrint.printFile(fileUrl)    
```

## Contributors


## License


##

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
