### 简介
---
仅仅作为复现bug使用

复现在对于被使用别名引入的scss文件，其中所使用别名引入的静态文件没有被替换为正确的路径。
### BUG说明

首先在vite.config.js 中配置resolve.alias
``` javascript
"resolve.alias": [
  { find: "@", replacement: path.resolve(__dirname, './src') },
  { find: "~sass", replacement: path.resolve(__dirname, './src/assets/sass') },
  { find: "~assets", replacement: path.resolve(__dirname, './src/assets') }
]
```
在 /src/assets/sass 中创建app.scss
``` css
.logo{
    width: 200px;
    height: 200px;
    background-image: url(~assets/logo.png); // 静态文件也使用别名引入
}
```
在App.vue 中引入
``` HTML
<style rel="stylesheet/scss" lang="scss">
//@import "./assets/sass/app"; //这样子是可以的
@import "~sass/app"; // 这样子会出现 http://localhost:3000/assets/sass/~assets/logo.png
</style>
```
