//块级作用域
// console.log(a);//不报错
// var a=1;
// console.log(b);//会报错
// let b=2;
{
    var c=1;
}
console.log(c);
{
    let d=1;
}
console.log(d);