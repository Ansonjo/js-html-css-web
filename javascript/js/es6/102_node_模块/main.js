// function(module,exportd,require,_filename,_dirname)
var obj = require('./circle');
var r=3;
console.log(`计算半径为${r}的圆的周长和面积:
周长:${Math.floor(obj.getCircleCircumference(3))}
面积:${Math.floor(obj.getCircleArea(3))}`);