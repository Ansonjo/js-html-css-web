/**
 * 文件流stream
 * 用于读取的文件很大,会读一部分到内存,然后把内容显示出来后就删除内存中的这部分内容,再读取下一部分
 */
 console.time('test')
const fs = require('fs');

/**
 * 读取流
 */
//1.创建可读流
var readStream = fs.createReadStream('a.vmem');
//2.设置编码为utf-8
// readStream.setEncoding('utf-8');
//获取数据流
//事件:监听是否有数据流
//使用回调函数来获取数据流
// readStream.on('data',chrunk=>{
//     console.log(chrunk); 
// });
//事件:监听文件是否已经读取结束
// readStream.on('end',chrunk=>{
//     console.log("文件读取结束");
// });

/**
 * 写入流,可以用于复制
 */
 var writeStream = fs.createWriteStream('c.vmem');

 //把读取流通过管道放入写入流
 readStream.pipe(writeStream);
 readStream.on('end',()=>{
    console.log("文件读取结束");
    console.timeEnd('test')
});