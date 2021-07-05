浏览器直接请求的服务器叫web服务器
间接请求的服务器有文件系统服务器(获取图片等资源的)、数据库服务器（获取数据的），这两个服务器是浏览器通过web服务器去间接请求的


非阻塞的异步I/O处理
事件驱动编程
无锁机制,不会产生死锁

nodejs不适合cpu密集型应用,深层次递归和嵌套,以及复杂算法,这些都对cpu要求较高
它适合IO密集型的应用,比如社交网站

nodejs的全局对象是global,而浏览器全局对象是window

require引入模块,
1.可以通文件路径引入,require('./my.js)

2.还可以通过文件夹的路径,但是如果js文件名必须是index.js,才能自动找到require('./js所在文件夹'),
如果js是其他名字,就需要添加package.json文件,添加"main" : "my.js",就可以找到了

3.通过文件夹的名字来获取,那必须的把文件夹放到node_modules文件夹下,就可以自动找到了,require('js所在文件夹')



module.指当前的模块对象

module.exports:当前模块的导出对象 ,实际写是module.可以省略

使用npm安装
npm install package,会自动生成一个node_modules文件夹,package就是存放js的文件夹会下载到node_modules这个目录下,并且会把package依赖的包一并下载

npm init -y 会初始化一个package.json文件(用于记录安装的包的信息),下次拷贝项目就不需要拷贝node_modules目录,因为这个目录会很大,只需要把package.json拷贝,运行时使用npm install就会自动下载package.json里记录的依赖包以及对应包的版本,npm install可以简写成npm i

