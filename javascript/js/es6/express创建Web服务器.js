const express = require('express');
const querystring = require('querystring');
var app = express();
app.listen(8080);
app.get('/',(req,res)=>{
    res.redirect('/reg');
});
app.get('/reg',(req,res)=>{
    console.log('跳转到/reg')
    res.sendFile(__dirname + "/reg.html");
});
app.post('/myreg',(req,res)=>{
    console.log('跳转到/myreg');
    // console.log(req.query);
    req.on('data',(data)=>{
        console.log(querystring.parse(data.toString())); 
        res.send("hello China");    
    });
});