const express = require('express');
var app = express();
app.listen(8080);
//使用app.use就是使用中间件,会拦截路径,满足条件再往下走
//参数1:你需要拦截的路由
app.use(express.static('public'));//public目录可以替换成其他目录只不过比较多