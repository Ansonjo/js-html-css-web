const express = require('express');
//创建路由器对象
var router = express.Router();
//往路由器中添加路由
//get /list
router.get('/list',(req,res)=>{
    res.send('这是产品列表');
});
router.get('/delete',(req,res)=>{
    res.send('删除产品');
});
module.exports=router;