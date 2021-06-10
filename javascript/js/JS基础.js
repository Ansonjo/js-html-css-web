// alert('我是DJ,你好');
// prompt('请输入你的年龄');
// console.log('我是程序员能看到的');
// js 是一行一行去解释成机器语言的
/*变量
//1.声明变量
var age;//声明一个名称为age的变量
age = prompt('请输入你的年龄');
console.log(age);
var name = '迪丽热巴';
var sex;
console.log(sex);//undefined
//不声明变量,直接复制,会作为全局变量
qq =10;
console.log(qq);

变量区分大小写

变量命名使用小驼峰的命名方式myEgg,允许以$和_开头

name不要作为变量名,在浏览器中有特殊含义
*/

/*数据类型
var age =10;
age = "w20";
console.log(age);不报错
所以js 是弱类型的语言

1.简单数据类型
number,boolean,string,undefined,object
var num = 010;//以0开头就是8进制
console.log(num);
num = 0x10;//以0x开头就是16进制
console.log(num);
数字型最大值
console.log(Number.MAX_VALUE);
//数字型最小值
console.log(Number.MIN_VALUE);
//无穷大,大于最大值
Infinity
//无穷小
-Infinity,小于最小值
//非数字
NaN
console.log("dd" -2 );
isNaN(),判断是不是非数字

2,字符串类型
打印包含单引号的字符串
var str = "我是'高富帅'的程序员";
console.log(str);
打印包含双引号的字符串
str = '我是"高富帅"的程序员';
console.log(str);
转义字符和C语言一样

var str= '酷热难耐,火辣的太阳下,我挺拔的身姿,成为了最为独特的风景。\n我审视四周,这里,是我的舞台,我就是天地间的王者。\我这一刻,我豪气冲天，终于大喊一声：“收破烂啦~”';
alert(str);


//获取字符串长度
var str = "dd";
console.log(str.length);//2
//拼接字符串 +
console.log("s" + "b");//sb
//字符串类型和任何其他类型相加,都是字符串型
console.log("s" + 10);//s10
//'s'++'b',再在++中间输入变量名,就变成了's' + age + 'b';
var age = 10;
console.log('s'+age+'b');//s10

typeof 可以得到变量类型

null是object

parseInt(),//转成整数
parseInt("3.14");//3
parseInt("3px");//3
parseInt("px3px");//NaN
parseFloat()//转换成浮点数
除了+加号,其他数学运算符号可以字符转成数字


//bool
'',0,NaN,null,undefined,通过Boolean(),转换的值都是false

//运算符
编译型语言和解释性语言的区别是,编译型语言是把所有代码通过编译器翻译成机器语言,之后再执行
而解释型语言是解释一行代码之后就直接执行,再比解释下一行代码
支持num++和++num,num--和--num;
后置的常用

//比较运算符
//== 会进行类型转换之后比较值, === 类型和值都相等才行,!=和!==类似,
//除了===和!==,其他关系运算符都会隐式转换类型

console.log('97' == 97);//true
console.log('97' < 98);//true

//数组
1.当数组越界时,打印结果是undefined
var arr = [4,5,3,1,2];
//定义max
var max=arr[0];
for(var i=0;i< arr.length;i++){
	for(var j=i;j< arr.length;j++){
		if(max )
	}
}
*/

/* 函数
//arguments的使用
// 当我们不确定有多少个参数传递的时候,可以用argumnents来获取,在js中,arguments实际上它是当前函数的一个内置对象.
// 所有函数都内置了一个arguments对象,arguments对象中存储了传递的所有实参
function fn(){
	console.log(arguments);//Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
}
fn(1,2,3);

//arguments是伪数组,并不是真正意义上的数组
//1.具有数组的length长度,就是等于实参个数
//2.按照索引的索引号进行存储
//3.没有数组的方法,比如pop和push
function fn(){
	console.log("***********");
	console.log(arguments.length);
	console.log("-----------");
	for(var i=0;i<arguments.length;i++){
		console.log(arguments[i]);
	}
}
fn(1,2,3);
fn(1,2,3,4);
//js的函数声明的另一种方式
//函数表达式(匿名函数)
var varTemp = '我是函数表达式';
var fun = function(){
	console.log('我是函数表达式');
}
fun();
//es6有块级作用域,低于es6的没有
var varTemp = '我是函数表达式';
{
	var varTemp = 10;
	console.log(varTemp);
}

//作用域链,就近原则
var num=123;
function fn(){
	var num=234;
	function fun(){
		console.log(num);
	}
	fun();
}
fn();

//预解析
//1.我们js引擎运行js 分为两步: 预解析 和 代码执行
//(1)预解析js引擎会把js里面的var还有有名function提升到当前作用域的最前面
//(2)代码执行按照代码书写 的顺序从上往下执行

//2.预解析分为变量预解析(变量提升) 和 函数预解析(函数提升)
//(1) 变量提升 就是把所有的变量提升到当前的作用域最前面  不提升赋值操作
console.log(num);//undefined
var num=10;
//原因,变量提升后 的代码
var num;
console.log(num);
num = 10;

fun();//报错
var fun = function(){
	console.log(10);
}
//原因,变量提升后 的代码
var fun;
fun();//报错
fun = function(){
	console.log(10);
}

//(2) 函数提升 就是把有名函数声明提升到当前作用域的最前面 不调用函数
fun();//不报错
function(){
	console.log(10);
}
//原因,函数提升后 的代码
function(){
	console.log(10);
}
fun();

//预解析案例
// var num = 10;
// fun();
// function fun(){
// 	console.log(num);
// 	var num = 20;
// }
//预解析后的代码
var num;
function fun(){
	var num;
	console.log(num);//undefined
	num = 20;
}
num = 10;
fun();

var a=b=c=9;
//等于一下操作
//var a=9,b=9,c=9//b和c是没有var声明的,是全局变量
*/

/*对象,具体的事物
//对象形式
//创建对象方式一
var obj = {
	uname: "lisi",
	age: 20,
	sex:"男",
	sayhi:function(){
			console.log("hi~");
		}
	}
	console.log(obj.age);
	console.log(obj["age"]);
	obj.sayhi();
//创建对象方式二
var obj1 = new Object();
obj1.uname = "sili "
//创建对象方式三,构造函数
function Star(uname,age,sex){
	this.name = uname;
	this.age = age;
	this.sex = sex;
	}
	//构造函数的函数名就首字母必须大写
	//构造函数不需要return
	var ldh = new Star('刘德华',18,"男);
	

// for(变量 in 对象){
	
	
// 	}
var obj = {
	name: "lisi",
	age: 18,
	sex:'男'
}
for(var k in obj){
	console.log("key =" + k);
	console.log("value = " + obj[k]);
	
}


//js中的对象分为3种: 自定义对象,内置对象,浏览器对象
//用https://developer.mozilla.org/zh-CN/,这个是查询文档

//Math对象不是构造函数,是静态的
常用属性
Math.floor();//向下取整
console.log(3.5);//3
Math.ceil();//向上取整
console.log(3.5);//4
Math.round();//四舍五入,就近取整

//随机数
//1.得到一个大于等于0，小于1之间的随机数
Math.random();//返回一个随机的小数 0 =< x < 1,[0,1)
//2.得到一个两数之间的随机数
Math.random() * (max - min) + min;
//3.得到一个两数之间的随机整数
min = Math.ceil(min);
max = Math.floor(max);
Math.floor(Math.random() * (max - min)) + min;
//4.得到一个两数之间的随机整数，包括两个数在内
min = Math.ceil(min);
max = Math.floor(max);
Math.floor(Math.random() * (max - min + 1)) + min;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}
console.log(Math.ceil(1));
console.log(Math.floor(2));
console.log(getRandomIntInclusive(1,2));

var num = Math.floor(Math.random() * (Math.floor(10) - Math.ceil(1) + 1)) + Math.ceil(1);
var myNum;
var i=0;
do{
	i++;
	myNum = prompt("请输入一个数字") - 0;
	if(isNaN(myNum)){
		alert('输入非法,请输入数字');
	}else{
		if(myNum > num){
			alert('数字大了,继续猜');
		}else if(myNum < num){
			alert('数字小了,继续猜');
		}else{
			alert('猜对了');
		}
	}
}while(num !== myNum && i != 3)

//Date内置对象是一个构造函数,需要new 创建
var date = new Date;//使用默认构造函数,则返回当前日期
console.log(date);
//可以使用数字型参数构造(年,月,日)
var date1 = new Date(2019,10,21);//打印出来的月是11月,因为Date中月的范围[0,11]
console.log(date1);
//字符串型
var date2 = new Date('2019-5-1 10:20:20');
console.log(date2);
//getDay(),0:是周日,6是周六

//输出今天是2019年5月1日星期三
var year = date2.getFullYear();
var month = date2.getMonth() + 1;
var dates = date2.getDate();
var day = date2.getDay();
var arr=["日","一","二","三","四","五","六"];
console.log("今天是" + year + "年" + month + "月" + dates + "日" + "星期" + arr[day]);

//获得Date总的毫秒数(时间戳,永远不会重复) 不是当前的毫秒数, 而是距离1970年1月1日 08:00:00 过了多少毫秒
//有以下四种方法
//valueOf()
//getTime()
//+new Date(),这是最常用的
//now(),这是H5才有的,不考虑兼容性就用这个
// console.log(+new Date());
// console.log(Date.now());
//时间戳也可以作为uid,因为是唯一的
var date = new Date('1970-01-01 08:00:00');
console.log(date.valueOf());//number

//倒计时
//核心算法: 输入时间减去现在的时间就是剩余的时间,即倒计时,但是不能拿着时分秒相减,比如05分减去25分,结果会是负数的
//用时间戳来做,用户输入时间的总的毫秒数减去现在时间的总的毫秒数,得到的就是剩余时间的毫秒数
//把剩余时间总的毫秒数转换成天时分秒(时间戳转换成时分秒)
//1秒等于1000毫秒
parseInt(总秒数/60/60/24);//计算天数
parseInt(总秒数/60/60%24);//计算小时
parseInt(总秒数/60%60);//计算分钟
parseInt(总秒数%60);//计算当前秒数


//内置对象Array
//1.创建方式1 []
//2.创建方式2 new
var  arr = new Array(2);//2是数组长度,是指创建了两个空元素
arr = new Array(2,3)//就是创建了[2,3]的数组
//检测是不是数组
//1.instanceof
var arr = [];
arr instanceof Array
//2.Array.isArray()
Array.isArray();

//添加数组元素,返回新数组的长度
push(参数1,参数2...)在数组尾部添加,可以 添加多个元素
unshift(参数1,参数2...)在数组头部添加,可以 添加多个元素

//减少数组元素,返回被删除/添加的元素值
pop()在数组尾部添加
shift()在数组头部添加

//reverse(),颠倒数组,返回新数组

//sort(),对数组进行排序,返回新数组
sort(),只能排序一位数
多位数排序需要传入回调函数
//正序
sort(function(a,b){
	return a-b;
})

//逆序
sort(function(a,b){
	return b-a;
})
*/
//lastIndexOf,indexof
var arr = [1,2,4];
arr.lastIndexOf()

//数组转成字符串
toString()返回一个字符串,并且用逗号分隔
join()返回一个字符串,用逗号分隔
join('-')返回一个字符串,用逗号分隔



//字符串对象
//由于字符串赋一次值,就会创建一个空间,之前的存放字符串的空间不会销毁
//基本包装类型
var str = "122";
str.length;
//内存实际方式
var temp = new Array("122");
var str = temp;
temp = null;

//lastIndexOf,indexof


//charAt(index),返回指定位置的字符
//charCodeAt(index),返回指定字符的ACSII
//str[index],获取指定位置处字符,H5支持

concat(str1,str2,str3...),作用等于加号,但是+号更常用
substr(start,length) 从start位置开始(索引号), length取的个数,重点记住这个
slice(start,end) 从start位置开始,截取到end位置, end取不到,两个都是索引号
substring(start,end) 从start位置开始,截取到end位置, end取不到, 基本和slice相同, 但是不接受负值


//1.replace

//2.split
// */
// */
// */
// */
// */
// */
// */