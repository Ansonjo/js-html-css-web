const express = require('express');
var app = express();
app.listen(8080);
//使用app.use就是使用中间件,会拦截路径,满足条件再往下走
//参数1:你需要拦截的路由
app.use('/',(req,res,next)=>{
    console.log('拦截/reg路由');
    var result = true;
    if(!result){
        res.send("不满足进入/reg路由的条件");
    }else{
        next();//进入下一个中间件或者路由
    }
});
app.get('/reg',(req,res)=>{
    res.send("进入/reg路由");
});