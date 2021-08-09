const http = require('http');
const fs = require('fs');

var url = 'http://127.0.0.1:8080/1.jpg';

for(var i=0;i<3;i++){
    http.get(url, (res) => {

        var imgData = "";
        res.setEncoding("binary");  // 下载图片需要设置为 binary, 否则图片会打不开
    
        res.on('data', (chunk) => {
           imgData+=chunk;
        });
        
        res.on('end', () => {
            var uid=Date.now();
            fs.writeFileSync(`./${uid}.png`, imgData, "binary");
            console.log('ok'+ uid);
        });
    });
}

