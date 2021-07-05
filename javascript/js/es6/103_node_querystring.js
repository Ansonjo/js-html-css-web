var querystring = require('querystring');
var str='keyword=手机&enc=utf8';
//把查询字符串解析为对象
var obj = querystring.parse(str);
console.log(obj);
//把对象格式化为查询字符串
var sr = querystring.stringify(obj);
console.log(sr);
