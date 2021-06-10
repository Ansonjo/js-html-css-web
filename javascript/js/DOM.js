/*
1.概念
DOM全称是Document Object Model,作用就是获取XML内容元素的,html本质上就是XML语言,所以在互联网中就是获取页面内容元素的
2.获取元素的方法
1)根据ID获取

var timer = document.getElementById('time')//参数是string,返回的是一个对象
console.log(timer);//打印标签<div id="time">2019-9-9</div>
console.dir(timer);//打印对象所有内容
2)根据标签名获取

var list = document.getElementsByTagName('li');//返回的是获取过来的元素对象的集合以伪数组形式存储
console.log(list);//HTMLCollection(4) [li, li, li, li]
// 3)根据H5新增的方法获取

var boxs = document.getElementsByClassName('box');//返回是获取过来的元素对象的集合以伪数组形式存储
console.log(boxs);//HTMLCollection(2) [div.box, div.box]
//querySelector 返回指定选择器的第一个元素对象
var firstBox = document.querySelector('.box');//.表示是对象
console.log(firstBox);
var nav = document.querySelector('#nav');//#表示是id
var li = document.querySelector('li');//#表示是标签
var allBox = document.querySelectorAll(".box");//和getElementsByClassName效果一样

// 4)特殊元素获取
//获取body元素
document.body
//获取html元素
document.documentElement;
*/

/*2.事件
//点击一个按钮,弹出对话框
//事件是由三部分组成,事件源、事件类型、事件处理程序，成为事件三要素
//事件源 事件被触发的对象 谁 按钮
var btn = document.getElementById("btn");
//事件类型 如何触发 什么事件  比如鼠标点击(onclick) 鼠标经过 按键按下
//事件处理程序 通过一个函数赋值的方式 完成
btn.onclick = function(){
	alert('点秋香');
}

//事件处理步骤
//1.获取事件源
var div = document.querySelector('div');
//2.注册事件(绑定事件)
// div.onclick
//3.添加事件处理程序(采取函数赋值形式)
div.onclick = function() {
	console.log("我被选中了");
}

//常见鼠标事件
//onclick 点击
//onmouseover 经过
//onmouseout 离开,移出
//onfocus  获得鼠标焦点
//onblur   失去鼠标焦点
//onmousemove  移动
//onmouseup 鼠标弹起
//onmousedown 鼠标按下
*/

/* 
操作元素
1.改变元素内容
elememnt.innerText,是ie用的,非标准
从起始位置到终止位置的内容,但它去除html标签, 同时空格和换行也会去掉

elememnt.innerHtml,是W3C标准
从起始位置到终止位置的内容,包括html标签, 保留空格和换行

上面两个属性时可读写的
//当我们点击了按钮,div 里面的文字会发生变化
//1.获取元素
var btn = document.querySelector('button');
var div = document.querySelector('div');
//注册事件,以及事件程序
btn.onclick = function(){
	div.innerText = getDate();
}

function getDate(){
	var date = new Date;
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var dates = date.getDate();
	var day = date.getDay();
	var arr = ['日','一','二','三','四','五','六'];
	return "今天是" + year + "年" + month + "月" + dates + "日" + "星期" + arr[day];
}
var p = document.querySelector('p');
p.innerText = getDate();

var div = document.querySelector('div');
div.innerText = '<strong>今天是:</strong> 2019';//<strong>今天是:</strong> 2019
div.innerHTML = '<strong>今天是:</strong> 2019';//今天是会被加粗

var p = document.querySelector('p');
console.log(p.innerText);

console.log(p.innerHTML);

//2.常用元素的属性操作
1)innerText,innerHtml
2)src,herf

//修改元素属性 src
//1.获取元素
var jdh = document.getElementById('ldh');
var zxy = document.getElementById('zxy');
var img = document.querySelector('img');
//2.注册事件 处理程序
ldh.onclick = function(){
	img.src = 'images1/ldh.jpg';
	img.title = '刘德华';
	img.alt = '刘德华';
}
zxy.onclick = function(){
	img.src = 'images/zxy.jpg';
	img.title = '张学友';
	img.alt = '张学友';
}
 3)id, alt, title

//表单元素的属性操作
//表单属性有: type,value,checked,selected,disabled
var btn = document.querySelector('button');
var input = document.querySelector('input');
btn.onclick = function(){
	//表单里面的值  文字内容是通过 value 来修改的
	input.value = "被点击了";
	//如果想要某个表单被禁用 不能再被点击 使用disable属性 我们想要这个按钮 button禁用
	// btn.disabled = true;
	//this 指向的是事件函数的调用者 btn
	this.disabled = true;
	
	
}

//明文密码切换案例
//1.获取元素
var eye = document.querySelector('img');
var pwd = document.querySelector('input');
var isClose = true;
//2.注册事件 执行程序
eye.onclick=function(){
	if(isClose){
		pwd.type = "text";
		this.src = 'images/open.png';
	}else{
		pwd.type = "password";
		this.src = 'images/close.png';
	}
	isClose = !isClose;
}

//样式属性操作
//可以通过js修改元素的大小、颜色和位置等样式

//1.通过style属性改变样式属性,适用于样式比较少,功能简单的情况
// 模仿淘宝点击关闭按钮,隐藏二维码
// display(none 隐藏, block显示) 
var btn = document.querySelector('.close-btn');
var box = document.querySelector('.box');
btn.onclick = function(){
	box.style.display = 'none';
}


//模仿京东隐藏文本框内容
var text = document.querySelector('input');
text.onfocus = function(){
	console.log("获得焦点");
	if(this.value === "手机")
		this.value = "";
	//获得焦点后需要把文本框中的文字颜色变黑
	this.style.color = '#333';
}

text.onblur = function(){
	console.log('失去焦点');
	if(this.value === "")
		this.value = "手机";
	//失去焦点后需要把文本框中的文字颜色变淡
	this.style.color = '#999';
}


//2.通过className 类名样式操作  改变样式属性

var text = document.querySelector('div');
text.onclick = function(){
	//1)使用style
	// this.style.backgroundColor = 'purple';
	// this.style.color = '#fff';
	// this.style.fontSize = '25px';
	// this.style.marginTop = '100px';

	//2)className
	this.className = "first change";
}


// 密码框验证信息
//用户如果离开密码框,里面输入个数不是6~16,则提示错误信息(密码较短,最短支持6个字符),否则提示输入正确信息

//分析
//1.判断事件是失去焦点
//2.如果输入正确则提示正确的信息颜色为绿色小图标变化
//3.如果输入不是6-16位,则提示错误信息颜色为红色 小图标变化
//4.样式多,所以用className

var div = document.querySelector('.register');
var ipt = document.querySelector('.ipt');
var message = document.querySelector('.message');

ipt.onblur = function(){
	if(this.value.length < 6 || this.value.length > 16){
		// console.log('错误');
		message.className = "message wrong";//保留之前的类名, 两个类名之间用空格隔开
		message.innerHTML = '你输入的位数不对,要求6-16位';
	}else{
		message.className = "message right";//保留之前的类名, 两个类名之间用空格隔开
		message.innerHTML = '输入正确';
	}
}

// 单选按钮的互斥,排除其他,留下自己
var btns = document.getElementsByTagName("button");
for (var i = 0; i < btns.length; i++) {
	
	btns[i].onclick = function(){
		for (var i = 0; i < btns.length; i++) {
			if(this === btns[i])
				btns[i].style.backgroundColor = "pink";
			else
				btns[i].style.backgroundColor = "";
		}
		// this.style.backgroundColor = "pink";
	}
}

*/
//百度换肤效果
var imgs = document.querySelector('.baidu').querySelectorAll('img');
console.log(imgs);
for (var i = 0; i < imgs.length; i++) {
	imgs[i].onclick = function(){
		console.log("url(" + this.src + ")");
		document.body.style.backgroundImage = "url(" + this.src + ")";
	}
}




// */
// */
// */
// */
// */
// */
// */
// */
// */
// */
// */
// */
// */
// */
// */
// */
// */
// */
// */
// */
// */
// */
// */
// */
// */
// */
// */
