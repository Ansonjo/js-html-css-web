const { response } = require('express');
const https = require('https');
var url = 'https://image.baidu.com/search/flip?tn=baiduimage&ie=utf-8&word=code&pn=0';
var arr=[];
https.get(url,(res)=>{
    console.log(res.statusCode);  
    res.on('data',chrunk=>{
        arr.push(chrunk.toString());
    });
    res.on('end',()=>{
        console.log(arr.length);
    });
});