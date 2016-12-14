# Kerbero

利用NodeJS實作

## Documentation

#### KDC
分成AS及TGS兩部分
<br>
 1. AS及TGS接收UI的請求
 2. AS及TGS回應UI的請求

<br><br><br>
 * bin
	> 建立伺服器 (5001)
 * crypto
 	> Crypto套件 (加密用)
 * routes
 	> 伺服器請求的路徑處理(後端)
 * app.js
 	> Client最先接觸到的JS

#### UI
用戶接觸到的介面,包括
<br>
 1. 注冊成為Client及Server ( 介面 )
 2. 登入並傳送請求給KDC中的AS
 3. Services Servers的列表 ( 介面 )
 4. 選取需要的Services Server並發送請求
 5. ...還沒想

<br><br><br>
 * bin
	> 建立伺服器 (5002)
 * public
 	> 前端用的 JS & Img & CSS
 * routes
 	> 伺服器請求的路徑處理(後端)
 * view
 	> HTML的資料夾(即用戶看到的介面)
 * app.js
 	> Client最先接觸到的JS


## Quick Start

```
npm install
```
> npm會去抓package.json的dependencies

```
npm run KDC
```
> npm會去抓package.json的Script (啟動KDC Server)


```
npm run UI
```
> npm會去抓package.json的Script (啟動UI Server)
