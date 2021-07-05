/**
*global
*var a=1;//var,let声明的都是局部变量
*console.log(global.a);
*global.a=1;//这才是全局变量
*console.log(global.a);
*/
/**
 * process
 * 它的常用属性
 * arch 查看当前cpu架构
 * platform 查看当前操作系统
 * env 查看操作系统所有的环境变量
 * version 查看nodejs版本号
 * pid 查看当前进程的编号
 * kill(进程号) 结束某个进程
 */

/**
 * console
 * 它的常用属性
 * log 打印日志
 * info 打印信息
 * warn 打印警告
 * error 打印错误
 */
// console.log(1);
// console.info(2)

// console.warn(3);
// console.error(4);
console.time('for');//time和timeEnd是搭配使用的,字符串参数必须一致,值可以随便写
for(let i=1,sum=0;i<1000000;i++){
    sum += i;
}
console.timeEnd('for');
