const fs = require('fs');
/**
 * 文件和目录有可用的stat(文件名/文件夹名,callback).existsSync
 */
// fs.stat('104_node_url.js',(err,stat) => {
//     if (err) throw err;
//     console.log(stat);
// });
// fs.stat('102_node_模块',(err,stat) => {
//     if (err) throw err;
//     console.log(stat);
// });
// console.log(fs.existsSync('104_node_url.js')); 
// console.log(fs.existsSync('mydir')); 
/**
 * 目录操作mkdir,rmdir,readdir
 */
// fs.mkdir('mydir',(err)=>{
//     // if(err) throw err;
// });
// fs.rmdir('mydir',(err)=>{
//     if(err) throw err;
// });
// fs.readdir('mydir',(err,result)=>{
//     if(err) throw err;
//     console.log(result);
// });

/**
 * 文件操作 writeFile,,appendFile,readFile,unlink
 * 
 */
// fs.writeFile('mydir/4.txt','222',(err)=>{
//     if(err) throw err;
// });
// fs.appendFile('mydir/4.txt','666',(err)=>{
//     if(err) throw err;
// });
// fs.readFile('mydir/4.txt',(err,data)=>{
//     if(err) throw err;
//     //data: 读取的数据,格式为Buffer
//     console.log(data.toString());
// });
//删除文件
// fs.unlink('4.txt',(err)=>{
//     if(err) throw err;
// });
console.time('test')
fs.copyFile('a.vmem','b.vmem',(err)=>{
    if(err) throw err;
    console.timeEnd('test')
});
console.log('end');

