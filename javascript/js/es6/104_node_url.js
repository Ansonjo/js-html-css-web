//引入url模块
const url = require('url');
//处理和理解url
var str='https://www.tmooc.cn:80/detail.html?lid=20';
console.log(url.parse(str));//弃用
console.log(new URL(str));//新的
var obj={
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.tmooc.cn:80',
    port: '80',
    hostname: 'www.tmooc.cn',
    hash: null,
    search: '?lid=20&enc=utf8',
    query: 'lid=20&enc=utf8',
    pathname: '/detail.html',
    path: '/detail.html?lid=20',
    href: 'https://www.tmooc.cn:80/detail.html?lid=20&enc=utf8'
  }
  console.log(url.format(obj));//弃用