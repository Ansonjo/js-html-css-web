---
typora-root-url: ./md_imgs
---

## 基础选择器:

1. 标签选择器

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<style>
    p {
        color:aqua
    }
    div {
        color: cadetblue;
    }
</style>
<body>
    <p>我是p标签</p>
    <div>我是一个div</div>
</body>
</html>
```

> ==标签选择器选择的是一类标签,而不是单独某一个==

2.类选择器

```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Document</title></head>
<style>
    .red {
        color: red;
    }
    .blue {
        color: blue;
    }
    .green {
        color: green;
    }
    .s1 {
        font-size: 10px;
    }
    .s2 {
        font-size: 20px;
    }
    .s3 {
        font-size: 30px;
    }
</style>
<body>
    <p class="red s1">红色</p>
    <p class="blue s2">蓝色</p>
    <p class="green s3">绿色</p>
</body>
</html>
```

> ==类选择器用英文句号表示".",类名命名和变量一样,可重复==
>
> ==类除了使得标签样式多样化外,还可以减少代码的冗余==

3.id选择器

```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Document</title></head>
<style>
    #red {
        font-size: 20px;
        color: red;
    }
    #blue {
        font-size: 40px;
        color: blue;
    }
    #green {
        font-size: 80px;
        color: green;
    }
</style>
<body>
    <p id="red">红色</p>
    <p id="blue">蓝色</p>
    <p id="green">绿色</p>
</body>
</html>
```

> ==类选择器用英文句号表示"#",类名命名和变量一样,不可重复==
>
> ==id一般配合js使用,非必要,都不要用id设置样式==

4.通配符选择器

```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Document</title></head>
<style>
    * {
        color: red;
    }
</style>
<body>
    <!-- 选择所有各种各样的标签,都设置为红色字体 -->
    <h1>H1</h1>
    <div>DIV</div>
    <P>p标签</P>
    <h2>H2</h2>
    <span>span标签</span>
</body>
</html>
```

> ==很少使用==

## 字体和文本样式

1.font字体样式: 

​	1.大小: font-size  取值:数字+px,默认16px

​	2.粗细: font-weight  取值: 正常-normal, 加粗-bold  

​	3.类型: font-family

​			1.1 字体系列

​					1.sans-serif(所有部分粗细相同,比如黑体,常用于网页

​					2.serif,粗细不一致,比如宋体,常用于报纸

​					3.monosapce等宽,比如consolas,常用于代码,便于格式化代码

​			1.2 取值

​					例如: 'Microsoft YaHei',宋体,sans-serif;找不到就会向右边继续找

​	4.样式: font-style(是否倾斜)   取值: 正常-normal, 倾斜-italic

​	5.连写 font:  style weight size/line-height family(sws/l-hf)

2.text文本样式

​	1.缩进: text-indent 取值: (1) 数字+px (2) 数字+em ,比较常用*//1em = 1个font-size*

​	2.水平对齐方式: text-align 取值: 左对齐-left,  居中-center,  右对齐-right  ,给文本父元素设置

​	3.修饰: text-decoration

​	<img src="https://i.loli.net/2021/10/09/nmLtXKwIUv6oeyd.png" alt="image-20210930135244654" style="zoom:50%;" />

补充: 

> ==text-align还可以让==
>
> ==span标签、a标签、input标签、img标签水平居中==
>
> ==同样：是对它们的父元素进行设置==

#### ![image-20210930144505028](https://i.loli.net/2021/10/18/h62gKFtIQbrW8Sn.png)

3.line-height行高

##### ![image-20210930171849109](https://i.loli.net/2021/10/18/EoFTDBMUefrS3NH.png)

```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Document</title></head>
<style>
    .box {
        width: 400px;
        height: 400px;
        background-color: skyblue;
        /*
            font:style weight size family
        */
        line-height: 400px;
        font: italic 700 20px 楷体;
        /* 此时文本不会垂直居中了,因为下面 */
        /*
            font:style weight size/line-height family
        */
    }
</style>
<body>
    <div class="box">自己是真的帅</div>
</body>
</html>
```

4.Chrome调试工具

1)选择元素

###### ![image-20211008100648217](https://i.loli.net/2021/10/08/shFvnOqMwrIb4XG.png)

2)控制样式

###### ![image-20211008100846452](https://i.loli.net/2021/10/08/qUeH9pE7RW4FhjQ.png)

3)特殊情况

1.在控制样式中出现删除线,当你把√去掉后出现,表示该属性暂时失效

2.在控制样式中出现三角形,表示语法错误



5.颜色常见取值

###### ![image-20211008101832218](https://i.loli.net/2021/10/08/5Rg2yJWHNi9YPkf.png)

==关键词表示,在项目中主要用于测试,正式的用16进制或rgba==

==rgba的省略写法rgba(0,0,0,0.5)可以简写为rgba(0,0,0,.5),也就是透明度把0去掉==

==16进制的省略写法#fab<=>#ffaabb==



## 选择器进阶

------

1.复合选择器

###### ![image-20211008112141324](https://i.loli.net/2021/10/08/KgjoT9WIdUzEXAF.png)

```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Document</title></head>
<style>
    /* 在.father的后代中,找到p标签*/
    .father p{
        color: red;
    }
</style>
<body>
    <!-- 需求: 只让小姐姐变红 (不改变html结构) -->
    <!-- 解决: 在.father这个div的后代中找到p标签即可 -->
    <div class="father">
        <p>小姐姐</p>
    </div>
    <p>小可爱</p>
</body>
</html>
```



###### ![image-20211008113004092](https://i.loli.net/2021/10/08/DArpUBQ1fRYJ2WF.png)



```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Document</title></head>
<style>
    /* 小可爱变红
    .father > div > p{
        color: red;
    } 
    */
    /* 小姐姐变红
    .father > div > p{
        color: red;
    } 
    */
    /* 大可爱变红 */
    body > p{
        color: red;
    }
</style>
<body>
<div class="father">
    <!-- 需求: 只让小可爱变红 (不改变html结构) -->
    <!-- 解决: 在.father这个div的子代中找到p标签即可 -->
    <p>小可爱</p>
    <div>
        <p>小姐姐</p>
    </div>
</div>
<p>大可爱</p>
</body>
</html>
```



2.并集选择器

###### ![image-20211008131130874](https://i.loli.net/2021/10/08/HYkaPQyLdvpA5i2.png)

```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Document</title></head>
<style>
    span,
    .box1,
    .box2,
    .father > p{
        color: red;
    }  
</style>
<body>
    <!-- 需求: 把div和p标签设置为红色 (节省代码的方式) -->
    <div class="box1">我是div</div>
    <div class="box2">我也是div</div>
    <div class="father">
        <p>小可爱</p>
        <div>
            <p>小姐姐</p>
        </div>
    </div>
    <span>我是span标签</span>
</body>
</html>
```



3.交集选择器

###### ![image-20211008132412625](https://i.loli.net/2021/10/18/F9kLKO3SXjcJBD6.png)

```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Document</title></head>
<style>
	p.red{
        color: red;
    }  
</style>
<body>
    <!-- 需求: 只让小可爱变红色 (不改变html结构) -->
    <div class="red">小姐姐</div>
    <p>小帅哥</p>
    <p class="red">小可爱</p>
</body>
</html>
```



4.Emmet语法

> 1.生成普通标签:  标签选择器 div
>
> div + tab键
>
> 2.生成div标签+类名:  类选择器 .red
>
> .red + tab键
>
> 3.生成div标签+id属性:  id选择器 #one
>
> #one + tab键
>
> 4.生成指定标签+类名+id属性:  交集选择器 p.red#one
>
> p.red#one + tab键
>
> 5.生成儿子:  子代选择器 ul > li
>
> ul > li + tab键
>
> 6.生成内部文本:  大括号 ul > li{我是li的内容}
>
> ul > li{我是li的内容} + tab键
>
> 7.同时创建多个:  *个数  
>
> ul > li*3 + tab键



5.hover伪类选择器

```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Document</title></head>
<style>
    a {
        text-decoration: none;
    } 
    a:hover {
        color: orange;
        text-decoration: underline;
    }
    div {
        width: 100px;
        height: 100px;
        background-color: skyblue;
    }
    div:hover {
        width: 200px;
        height: 200px;
        background-color: orange;
    }
</style>
<body>
    <a href="#">我是一个a标签</a>
    <div></div>
</body>
</html>
```

###### ![image-20211008140858125](https://i.loli.net/2021/10/18/UmJ28fgHMvaByTW.png)



## 背景相关属性

------

1.背景颜色 background-color

> ==注意点:==
>
> - 背景颜色默认是<strong>透明</strong>: rgba(0,0,0,0) transparent
> - 背景颜色不会影响盒子大小,  并且还能看清盒子的大小和位置,一般在布局中会习惯先给盒子设置背景颜色



2.背景图片 background-image

###### <img src="https://i.loli.net/2021/10/08/rduSYFajPKoCk9m.png" alt="image-20211008145540972" style="zoom: 80%;" />

> ==注意点:==
>
> - ​	背景图片中的url中可以省略引号
> - ​    背景图片默认是在水平和垂直方向平铺的,类似瓷砖一样
> - ​    背景图片仅仅是只给盒子起到装饰效果, 类似背景颜色, 是不能撑开盒子的



3.背景平铺 background-repeat

###### ![image-20211008151837564](https://i.loli.net/2021/10/08/cnaCwPtJNe64sWh.png)

4.背景位置 background-position

###### ![image-20211008152224212](https://i.loli.net/2021/10/08/scI8M3T1ARJ2Oj9.png)

###### ![image-20211008152725388](https://i.loli.net/2021/10/08/xplQjWE2UD7hdYn.png)





5.背景相关属性连写 background

###### ![无标题](https://i.loli.net/2021/10/08/b4cjV9RmyWTlNA7.png)



###### ![image-20211008155049173](https://i.loli.net/2021/10/08/Yl4GKfxudkrJPQH.png)



###### 元素显示模式

------

1.块级元素

###### ![image-20211008155803097](https://i.loli.net/2021/10/08/SxLcuTbFfEZnyVo.png)

###### ![image-20211008155729580](https://i.loli.net/2021/10/08/Comuz1ivU9OIEqB.png)



2.行内元素

###### ![image-20211008160030740](https://i.loli.net/2021/10/08/RgH3x812dUyS4un.png)



3.行内块元素

###### ![image-20211008160825788](https://i.loli.net/2021/10/08/OlVAMBaci3FHsCD.png)



4.元素显示模式转换

就是修改display属性

==一般只会转成块级元素或者行内块元素,极少转成行内元素==



###### ![image-20211008164743855](https://i.loli.net/2021/10/08/5Hvr1nw2fkAYSsL.png)



###### ![image-20211008164912345](https://i.loli.net/2021/10/08/Zxy4ur7sJbna9AP.png)



## CSS三大特性

------

##### 1.1继承性的介绍

特性:	子元素有默认继承元素样式的特点 (子承父业)

可以继承的常见属性:

1.color

2.font-style、font-weight、font-size、font-family

3.text-indent、text-align

4.line-height

注意点：

​	可以通过调试工具判断样式是否可以继承

好处： 可以在一定程度上减少代码

常见应用场景：

 	1. 可以直接给ul设置list-style：none属性，从而去除li的小圆点样式
 	2.  直接给body标签设置统一的font-size，从而统一不同浏览器默认文字大小



继承失效的的特殊情况

如果元素有浏览器默认样式， 此时继承性依然存在， 但是优先显示浏览器的默认样式

1. a标签的color会失效
2. h系列标签的font-size会失效
3. div的高度宽度不能继承，但由于div独占一行的特点，宽度会有类似于继承的效果



##### 2.1层叠性的介绍

特性：

1、给同一个标签设置不同样式=》此时样式会层叠叠加=》会共同作用在标签上

2、给同一个标签设置相同的样式=》此时样式会层叠覆盖=》最终写在最后的样式会生效

注意点：

1、当样式冲突时，只有选择器优先级相同时，才能通过层叠性判断结果



##### 3.1优先级的介绍

特性： 不同选择器具有不同的优先级，优先级高的选择器样式会覆盖优先级低的选择器样式

优先级公式：

​	继承 < 通配符(*)选择器 < 标签选择器 < 类选择器 < id选择器 < 行内样式 < !important

注意点:

1、！important写在属性值后面，分号前面、

2、！important不能提升继承优先级，==只要是继承优先级都是最低的==

3、实际开发中不建议使用！important

##### 3.2权重叠加计算

场景：如果是复合选择器，此时需要通过权重叠加计算方法，判断最终哪个选择器优先级最高会生效

权重叠加计算公式：

###### ![image-20211009143634282](https://i.loli.net/2021/10/09/3JXuZLpqGnkHRcs.png)

步骤:

1.首先把能够选择到该元素的选择器筛选出来,如果被!important了,那就不用看了,如果是继承,也不用看了

2.把每个选择器根据公式计算出来

3.只要有一级胜出,后面就不用看了

4.如果优先级相同,则根据层叠性,最下面的生效;

```html

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>第4题：权重相同此时比较层叠性</title>
	<style>
        /* 0 0 2 1 */
		.c1 .c2 div { 
			color: blue;
		}
		/* 0 1 0 1 */
		div #box3 {
			color:green;
		}
		/* 0 1 0 1 */
		#box1 div {
			color:yellow;
		}
        
        /*
        	1.根据权重叠加计算胜出的 div #box3 和 #box1 div
        	2.再根据相同优先级,看叠加性,胜出的是#box1 div
        	3.文本的颜色是yellow
        */
	</style>
</head>
<body>
	<div id="box1" class="c1">
		<div id="box2" class="c2">
			<div id="box3" class="c3">
				这行文本是什么颜色的？
			</div>
		</div>
	</div>
</body>
</html>
```



```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>第5题: 全是继承的特殊情况</title>
	<style>
		div p {
			color:red;
		} 
	
		.father {
			color:blue;
		} 
        /* 
        	1.元素span而言,div p和.father都是继承
        	2.当有多个继承,那就找最近的,span最近的是父亲p标签
	        3.span文字的颜色继承于p,而根据优先级p的颜色是red  
        */
	</style>
</head>
<body>
	<div class="father">
		<p class="son"> 
			<span>文字</span>
           
		</p>
	</div>
</body>
</html>
```



##### 拓展   查错流程

------

遇到样式出不来, 要学会通过调试工具

![image-20211009153429140](https://i.loli.net/2021/10/09/VNbGg1qnKcfUiDd.png)

## 盒子模型

-------

##### 目标: 能够认识 ==盒子模型的组成==,能够掌握盒子模型的边框、内边距、外边距的 ==设置方法==

##### 1.1盒子模型简介

1. 盒子的概念

   1.页面中的每一个标签都可以看成一个“盒子”，通过盒子的视角更方便的进行布局

   2.浏览器在渲染（显示）网页时， 就是将网页中的元素看做是一个个的矩形区域，我们也形象的称之为 ==盒子==

2. 盒子模型的组成

   类比包装好的新手机的包装盒

   <ul>
   	<li>内容区域 content (<b>类似里面的手机</b>)</li>    
       <li>内边距区域 padding  (<b>类似手机和包装盒内部的之间的间隙</b>)</li>
       <li>边框区域 border (<b>类似包装盒的厚度</b>)</li>
       <li>外边距区域 margin (<b>类似包装盒和墙或者其他盒子之间的距离,比如距离body</b>)</li>
   </ul>

<img src="https://i.loli.net/2021/10/09/mvGtOW3H9uV2D8g.png" alt="image-20211009160327110" style="zoom:67%;" />



##### 2.1内容区域的宽度和高度

###### ![image-20211009164514222](https://i.loli.net/2021/10/09/K8NryQJVdqEFpfx.png)

##### 3.1 边框 ( border ) - 单个属性

作用: 给设置边框粗细、边框样式、边框颜色效果

单个属性：

###### ![image_20211011100207.png](https://i.loli.net/2021/10/11/5VLmCJAEqSWGjbM.png)

##### 3.2 边框 ( border ) - 连写形式

###### ![image_20211011143450](https://i.loli.net/2021/10/11/w8WBFPrMOJUDpjf.png)

##### 3.3边框 ( border ) - 单方向设置

场景: 只给盒子的某个方向单独设置边框

属性名: border-方向名词(top bottom left right)

属性值: 连写的取值

```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Document</title>
</head>
<style>
    .d {
        width: 400px;
        height: 400px;
        background-color: skyblue;

        /* 1.单个属性 */
        /* border-width: 2px; */
        /* border-style: solid; */
        /* border-color: red; */

        /* 2.连写形式 */
        border: 10px solid greenyellow;
        padding: 100px ;
        margin: 100px;
        /* 3.单方向设置 */
        /* border-top: 10px solid #000; */
        /* border-bottom: 10px solid #000; */
        /* border-left: 10px solid #000; */
        /* border-right: 10px solid #000; */
    }
</style>
<body>
    <div class="d"></div>     
</body>
</html>
```

##### 3.4盒子实际大小初级计算公式

要求: 盒子尺寸 400x400, 背景绿色, 边框10px 实线 黑色, 如果完成?

​	==注意点: 1) 设置width和height是内容区域的宽高 2) 设置border会撑大盒子==

盒子实际大小初级计算公式:

​	盒子宽度 = 左边框 + 内容宽度 + 右边框

​	盒子高度 = 上边框 + 内容高度 + 下边框

解决: 当盒子被border撑大后,如何满足需求?

<img src="https://i.loli.net/2021/10/11/WXoxhJZi2QDpFmC.png" alt="image-20211011144547667" style="zoom: 67%;" />

##### 3.5新浪导航案例

###### <img src="https://i.loli.net/2021/10/11/wl6xSZTXqML7mup.png" alt="image-20211011151657752" style="zoom:70%;" />

布局顺序:

1.  从外往内, 从上往下

每一个盒子的样式

1. 宽高
2. 辅助的背景颜色
3. 盒子模型的部分: border 、padding、margin
4. 其他样式： color、font-、text-、......

```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Document</title></head>
<style>
    /* 清除标签默认的margin和padding */
    * {
        margin: 0;
        padding: 0;
    }
    .d {
        height: 40px;
        /* background-color: skyblue; */

        border-top: 3px solid #ff8500;
        border-bottom: 1px solid #edeef0;
    }
    .d a{
        width: 80px;
        height: 40px;
        /* background-color: pink; */
        color: #4c4c4c;
        font-size: 12px;
        text-decoration: none;
        /* 转换行内块 */
        display: inline-block;
        text-align: center;
        line-height: 40px;
    }
    .d a:hover{
        background-color: #edeef0;
        color: #ff8400;
    }
</style>
<body>
    <div class="d">
        <!-- a便签换行写的话,浏览器会把换行识别为空格,导致它们之间产生间隙,所以标签之前不要有空格和换行,如果在一行的时候 -->
        <a href="#">新浪导航</a><a href="#">新浪导航</a><a href="#">新浪导航</a><a href="#">新浪导航</a>
    </div>     
</body>
</html>
```



##### 4.1 内边距 ( padding ) - 取值

作用: 设置 ==边框== 与 ==内容区域== 之间的距离

属性名: padding

常见取值:

###### ![image-20211011164240294](https://i.loli.net/2021/10/11/aBfuHUKVeWh7oXZ.png)

记忆规则: ==从上开始赋值, 然后顺时针赋值, 如果没有值,就把对面的值赋给它==

##### 4.2 内边距 ( padding ) - 单方向取值

场景: 只给盒子的某个方向单独设置内边距

属性名: padding-方向名词

属性值: 数字 + px

```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8">title>Document</title></head>
<style>
    .d {
        width: 100px;
        height: 100px;
        background-color: skyblue;
        border: 1px solid #000;

        /* 1. padding的取值 */
        /* padding: 10px; */
        /* padding: 10px 20px; */
        /* padding: 10px 20px 30px; */
        /* padding: 10px 20px 30px 40px; */

        /* 2. padding的单方向取值 */
        padding-left: 20px;
    }
</style>
<body>
    <div class="d">我是内容我是内容我是内容我是内容我是内容我是内容</div>     
</body>
</html>
```

##### 4.3 新浪导航案例

```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Document</title></head>
<style>
    /* 清除标签默认的margin和padding */
    * {
        margin: 0;
        padding: 0;
    }
    .d {
        height: 40px;
        /* background-color: skyblue; */

        border-top: 3px solid #ff8500;
        border-bottom: 1px solid #edeef0;
    }
    .d a{
        /* 转换行内块 */
        display: inline-block;
        /* width: 80px; */
        height: 40px;
        /* 设置padding文字就不会津贴边框 */
        padding: 0 20px;
        /* background-color: pink; */
        color: #4c4c4c;
        font-size: 12px;
        text-decoration: none;
        text-align: center;
        line-height: 40px;
    }
    .d a:hover{
        background-color: #edeef0;
        color: #ff8400;
    }
</style>
<body>
    <div class="d">
    	<!-- 当设置了标签宽度,放不下的内容就会换行显示,不设置就会根据内容自动改变宽度 -->
        <a href="#">新浪导航</a><a href="#">新浪导航新浪导航新浪导航</a><a href="#">新浪导航</a><a href="#">新浪导航</a>
    </div>     
</body>
</html>
```



##### 4.4 不会撑大盒子的特殊情况

==需要满足以下条件==: 

1. 是块级元素
2. 子盒子没有设置宽度, 父盒子设置了宽度
3. 设置的左右padding和左右border之和不大于父盒子的宽度

此时,设置==左右padding==和==左右border==不会撑大盒子

##### 4.5 CCS3盒模型 ( 自动内减 )

需求: 盒子尺寸 300*300, 背景粉色, 边框10px 实线 黑色, 上下左右20px的内边距, 如何完成?



解决方法1 : 手动内减 ( 手动修改内容宽度高度 )



解决方法2: 自动内减 (设置box-sizing: border-box;)



##### 5.1 外边距 ( margin ) - 取值

作用: 设置边框之外, ==盒子与盒子==之间的距离

常见取值:

###### ![image-20211012130618525](https://i.loli.net/2021/10/12/EkHWpy85L3YiQAt.png)

记忆规则: ==从上开始赋值, 然后顺时针赋值, 如果没有值,就把对面的值赋给它==

##### 5.2 外边距 ( margin ) - 单方向取值

场景: 只给盒子的某个方向单独设置外边距

属性名: margin -方向名词

属性值: 数字 + px



##### 5.3 margin单方向设置的应用

###### ![image-20211012131857010](https://i.loli.net/2021/10/12/DHtLRrQp4JxWE1A.png)





###### ![image-20211012135948873](https://i.loli.net/2021/10/12/PnBpMRd6qvUsKWC.png)



###### ![image-20211012140140758](https://i.loli.net/2021/10/12/Ie4sKciyDf8NSxJ.png)

##### 5.7 外边距折叠现象 - 合并现象

场景: 垂直布局 和 块级元素, 上下的margin会合并

结果: 最终两者距离margin的最大值

解决方法: 避免就好

​	==只给其中一个盒子设置margin即可==

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"><title>Document</title>
  <style>
    /* 清除标签默认的margin和padding */
    * {
      margin: 0;
      padding: 0;
    }
    div{
      width: 300px;
      height: 300px;
    }
    .red {
        background-color: red;
        margin-bottom: 100px;
    }
    .blue {
        background-color: blue;
        margin-top: 200px;
    }
  </style>
</head>
<body>
    <div class="red"></div>
    <div class="blue"></div>
</body>
</html>
```



##### 5.8 外边距折叠现象 - 塌陷现象

场景: 互相嵌套 的  块级元素, 子元素的==margin-top会作用在父元素上==,导致父元素和子元素一起移动了

结果: 导致父元素一起移动

解决方法:

1. 给父元素设置border-top或者padding-top(极少使用)
2. 给父元素设置overflow: hidden (==经常使用==)
3. 转换成行内块元素
4. 设置浮动

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"><title>Document</title>
  <style>
    /* 清除标签默认的margin和padding */
    * {
      margin: 0;
      padding: 0;
    }
    .father {
      width: 400px;
      height: 400px;
      background-color: skyblue;
    }
    .father .son {
        width: 100px;
        height: 100px;
        background-color: blue;
        margin-top: 100px;
    }
  </style>
</head>
<body>
    <div class="father">
        <div class="son"></div>
    </div>
</body>
</html>
```



##### 5.9 行内元素的margin和padding无效情况

场景: 给行内元素设置margin和padding时, 比如span标签

结果: 

1. 水平方向的margin和padding布局中有效
2. 垂直方向的margin和padding布局中无效



##### 1.结构伪类选择器

##### 2.伪元素

##### 3.标准流



##### ![image-20211013135208491](https://i.loli.net/2021/10/13/Xs7ZQ3dNlE6SMjv.png)



###### ![image-20211013135329958](https://i.loli.net/2021/10/13/NksjB9fHay7CrXm.png)

公式顺序不能改,必须-n+5不能写成5-n, 否则失效

###### ![image-20211013135817140](https://i.loli.net/2021/10/13/zS7QIF9g1XJo86b.png)

::first-letter修改第一个字符样式

::first-line修改第一行样式

###### ![image-20211013135923616](https://i.loli.net/2021/10/13/2dyTtXF7iwMem6j.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    /* 清除标签默认的margin和padding */
    * {
      margin: 0;
      padding: 0;
    }
    .father {
      width: 300px;
      height: 300px;
      background-color: skyblue;
    }
    .father::after {
        content: "我是后伪元素";
        display: inline-block;
        height: 100px;
        color: #fff;
        background-color: blue;
    }
    .father::before {
        content: "我是前伪元素";
        display: inline-block;
        height: 100px;
        background-color: orange;
    }
  </style>
</head>
<body>
    <div class="father"></div>
</body>
</html>
```



###### ![image-20211013150149441](https://i.loli.net/2021/10/13/ptzgRB1rfUqAObS.png)





## 浮动

##### 1.1 作用

1. 早期的作用: 图文环绕
2. 现在的作用: 网页布局

###### ![image-20211013151140943](https://i.loli.net/2021/10/13/gsrAhV5XBe1lpjk.png)

==即使浏览器的窗口宽度改变,他们也是一个在最左边一个在最右边==

##### 2.1 代码

属性名: float

属性值:

###### ![image-20211013151304493](https://i.loli.net/2021/10/13/Pqet1WL3JhEzA9w.png)

```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Document</title>
  <style>
    /* 清除标签默认的margin和padding */
    * {
      margin: 0;
      padding: 0;
    }
    .left {
      width: 200px;
      height: 200px;
      background-color: skyblue;
      float: left;
    }
    .right {
        width: 200px;
        height: 200px;
        background-color: blue;
        float: right;
    }
  </style>
</head>
<body>
    <div class="left"></div>
    <div class="right"></div>
</body>
</html>
```



##### 3.1 特点

1. 浮动元素会脱离标准流 ( 简称: 脱标 ) , 在标准流中不占位置 ( 仅仅对于块级元素而言 )

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <title>Document</title>
     <style>
       /* 清除标签默认的margin和padding */
       * {
         margin: 0;
         padding: 0;
       }
       div {
         width: 200px;
         height: 200px;
       }
       .red {
           background-color: red;
       }
       .green {
           background-color: green;
           float: right;
       }
       .blue {
           background-color: blue;
       }
     </style>
   </head>
   <body>
   <div class="red"></div>
   <div class="green"></div>
   <div class="blue"></div>
       
   </body>
   </html>
   ```

2. 浮动元素比标准流高半个级别在显示上, 可以覆盖标准流中的元素

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <title>Document</title>
     <style>
       /* 清除标签默认的margin和padding */
       * {
         margin: 0;
         padding: 0;
       }
       div {
         width: 200px;
         height: 200px;
       }
       .red {
           background-color: red;
       }
       .green {
           background-color: green;
           float: left;
       }
       .blue {
           width: 240px;
         	height: 240px;
           background-color: blue;
       }
     </style>
   </head>
   <body>
   <div class="red"></div>
   <div class="green"></div>
   <div class="blue"></div>
       
   </body>
   </html>
   ```

   

3. 浮动找浮动, 下一个浮动元素会在上一个浮动元素后面左右浮动

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <title>Document</title>
     <style>
       /* 清除标签默认的margin和padding */
       * {
         margin: 0;
         padding: 0;
       }
       div {
         width: 200px;
         height: 200px;
       }
       .red {
           background-color: red;
           float: left;
       }
       .green {
           background-color: green;
           float: left;
       }
       .blue {
           background-color: blue;
           float: left;
       }
     </style>
   </head>
   <body>
   <div class="red"></div>
   <div class="green"></div>
   <div class="blue"></div>
       
   </body>
   </html>
   ```

   

4. 浮动元素会受到上面元素的边界的影响

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <title>Document</title>
     <style>
       /* 清除标签默认的margin和padding */
       * {
         margin: 0;
         padding: 0;
       }
       div {
         width: 200px;
         height: 200px;
       }
       .red {
           background-color: red;
       }
         /*green盒子受到red盒子对占一行的下边界影响只能浮动到第二行, 如果red不是块级元素, 就可以浮动到第一行了*/
       .green {
           background-color: green;
           float: left;
       }
       .blue {
           background-color: blue;
       }
     </style>
   </head>
   <body>
   <div class="red"></div>
   <div class="green"></div>
   <div class="blue"></div>
       
   </body>
   </html>
   ```

   5.浮动元素有特殊的显示效果

   ​		1) 一行可以显示多个浮动元素

   ​		2) 浮动元素都可以设置宽高,包括行内元素

   注意点:

   浮动的元素不能通过text-align:center或者margin: 0 auto, 让==浮动元素本身==水平居中

4.1 清除浮动

含义: ==清除子元素的浮动,造成父元素高度为0的影响

原因: 子元素浮动后脱标 --> 不占位置

目的:  需要父元素有高度, 从而不影响其他网页元素的布局

方法: 给父元素设置overflow: hidden属性

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
<title>Document</title>
    <style>
        /* 清除标签默认的margin和padding */
        * {
            margin: 0;
            padding: 0;
        }
        .father {
            width: 400px;
            background-color: pink;
            /* 使父元素获得内容高度 */
            overflow: hidden;
        }
        .son {
            width: 100px;
            height: 400px;
            background-color: blue;
            float: left;
        }
    </style>
</head>
<body>
    <div class="father">
        <div class="son"></div>
    </div>
</body>
</html>
```



## 定位

###### <img src="https://i.loli.net/2021/10/12/n7bLtVrQP4oZ5Sg.png" alt="image-20211012162453321" style="zoom:50%;" />



#### 1.1 网页常见布局方式

##### 1.标准流

1. 块级元素独占一行 -->垂直布局
2. 行内元素/行内块元素一行显示多个,当不够显示会自动换行显示 --> 水平布局

##### 2.浮动

1. 可以让原本垂直布局的块级元素变成水平布局

##### 3.定位

1. 可以让元素自由的摆放在网页的任意位置
2. 一般用于==盒子之间的层叠情况== -->定位之后元素层级最高, 可以层叠在其他盒子上

#### 2.1 使用定位的步骤

##### 1.设置定位的方式

属性名: position

常见属性值:

###### ![image-20211012164701529](https://i.loli.net/2021/10/12/mSlVMTe5Uq2fr8C.png)



##### 2.设置偏移值

偏移值设置分为两个方向,水平和垂直方向各选一个使用即可

选取的原则一般是就近原则(离哪边近用哪个)

###### ![image-20211012164836919](https://i.loli.net/2021/10/12/AWZhBnKgTwG17zl.png)



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    * {
        margin: 0;
        padding: 0;
    }
    div {
        width: 300px;
        height: 300px;
    }
    .red{
        background-color: red;
    }
    .blue{
        /* 1.设置定位方式 为绝对定位*/
        position: absolute;
        /* 设置偏移值 */
        top: 150px;
        left: 150px;
        background-color: blue;
    }
</style>
<body>
    <div class="red"></div>   
    <div class="blue"></div>     
</body>
</html>
```

#### 3.1 静态定位

介绍: 静态定位是默认值, 就是之前认识的标准流

代码: position:static;

注意点: 

1.静态定位就是之前的标准流, 不能通过方位属性进行移动

2.之后说的定位不包括静态定位, 一般特指后几种: 相对、绝对、固定



#### 4.1 相对定位

介绍: 自恋型定位, 相对于自己之前的位置进行移动

代码: ==position:relative;==

特点:

1. 需要配合方位属性实现移动
2. 相对于自己原来位置进行移动
3. 在页面中占位置 --> 没有脱标(就是没有飞起来)

应用场景:

1. 配合绝对定位组CP (子绝父相)
2. 用于小范围移动

#### 5.1 绝对定位

介绍: 拼爹型定位, 相对于非静态定位的父元素进行定位移动

代码:  ==position: absolute;==

特点:

1. 需要配合方位属性实现移动
2. 默认相对于浏览器可视区域进行移动
3. 在页面中不占位置 --> 已经脱标

应用场景:

1. 配合相对定位组CP(子绝父相)

#### 5.2 绝对定位到底相对于谁进行偏移

1. 祖先元素中没有定位 --> 默认相对于浏览器进行移动
2. 祖先元素中有定位 --> 相对于==离它最近有定位的祖先元素==进行移动

#### 5.3 子绝父相介绍

场景: 让子元素相对于父元素进行自由移动

含义:

子元素: 绝对定位

父元素: 相对定位

子绝父相好处:

父元素是相对定位, 则对网页布局影响最小,因为相对定位是占位置的

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    * {
        margin: 0;
        padding: 0;
    }
    .father {
        position: relative;
        width: 600px;
        height: 600px;
        background-color: pink;
    }

    .son {
        /* son父亲father是相对定位,son是绝对定位,所以是子绝父相 */
        position: absolute;
        left: 0;
        top: 100px;
        width: 400px;
        height: 400px;
        background-color: skyblue;
    }
    .sun {
        /* sun父亲son是绝对定位,sun是绝对定位,所以是子绝父绝 */
        position: absolute;
        right: 20px;
        bottom: 0;
        width: 200px;
        height: 200px;
        background-color: blue;
    }
</style>
<body>
    <div class="father">
        <div class="son">
            <div class="sun"></div>
        </div>
    </div>
</body>
</html>
```

#### 6.1 固定定位

介绍: 死心眼型定位, 相对于浏览器定位移动

代码: ==position: fixed;==

特点: 

1. 需要配合方位属性实现移动
2. 相对于浏览器可视区域进行移动
3. 在页面中不占位置 --> 脱标

应用场景:

  1. 让和盒子固定在屏幕中的某个位置



![image-20211022143050859](https://i.loli.net/2021/10/22/JSzWbpGyYe4ZIxF.png)



#### 7.1 元素层级问题 （显示的优先级）

😀 不同布局方式元素的层级关系

- 标准流 <  浮动 < 定位



😀 不同定位之间的层级关系

- 相对、绝对、固定定位的默认层级相同
- 此时HTML中写在下面的元素层级更高， 会覆盖上面的元素



#### 7.2 更改定位元素的层级

😀 场景：改变定位元素的层级

😀属性名： z-index

😀属性值： 数字

- 数字越大， 层级越高



##  装饰

#### 😀1. 垂直对齐方式(同级,父子不可以)

##### 1.1 认识基线 (了解)

基线: 浏览器文字类型元素排版中存在用于对齐的基线  (baseline)

![image-20211022152652041](https://i.loli.net/2021/10/22/oY1CgldM42GpiES.png)

##### 1.2 文字对齐问题

场景: 解决==行内/行内块元素==垂直对齐问题

**[问题]()** : 当图片和文字在一行中显示时, 其实底部不是对齐的,而是和文字基线对齐,而我们需要的文字底部和图片底部对齐



##### 1.3 垂直对齐方式

属性名:  vertical-align

属性值: 

###### ![image-20211022155447684](https://i.loli.net/2021/10/22/roZqV7kw9FA5hGi.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    img {
        vertical-align: bottom;
    }
  </style>
</head>
<body>
    <img src="./images/1.jpg" alt="">asdf我好帅啊帅爆了我好帅啊帅爆了adgfgfg
</body>
</html>
```



##### ( 拓展补充) 项目中vertical-align 可以解决的问题

###### 😀1. 文本框和表单按钮无法对齐的问题

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    input {
        /* 统一高度,解决高度不一致问题 */
        height: 50px;
        /* 自动内减, 解决由于文本框存在border和padding造成盒子被撑大的问题 */
        box-sizing: border-box;
        /* 
            解决由于行内/行内块元素默认垂直对齐方式的影响,造成文本框和按钮不对齐问题
            只有标准流存在这样的问题
         */

         /* 1.修改垂直对齐方式 */
         /* vertical-align: middle; */

         /* 2.浮动 */
         float: left;

         /* position: relative; */
    }
  </style>
</head>
<body>
    <input type="text"><input type="button" value="百度一下">
</body>
</html>
```



###### 😀2. input标签和img标签无法对齐的问题

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    img {
        vertical-align: bottom;
    }
  </style>
</head>
<body>
    <img src="./images/1.jpg" alt=""><input type="text">
</body>
</html>
```



###### 😀3. div中的文本框, 文本框无法帖顶问题

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .father {
        /* position: relative; */
        width: 400px;
        height: 400px;
        background-color: pink;
        /* margin-left: 300px; */
    }
    input {
         /* 1.修改垂直对齐方式 */
         vertical-align: top;

         /* 2.浮动 */
         /* float: left; */

         /* position: absolute; */
    }
  </style>
</head>
<body>
    <div class="father">
        <input type="text">
    </div>
</body>
</html>
```

###### 😀4. div不设高度由img标签撑开, 此时img标签下面会存在额外间隙的问题

​	原因: 是浏览器预留给图片后面可能的文本, 而产生文本基线和图片底部之间的间隙,这就是==额外间隙的由来==

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .father {
        /* position: relative; */
        width: 400px;
        background-color: pink;
        /* margin-left: 300px; */
    }
    img {
         /* 1.修改垂直对齐方式 */
         vertical-align: bottom;

         /* 2.浮动 */
         /* float: left; */

         /* position: absolute; */
    }
  </style>
</head>
<body>
    <div class="father">
    <img src="./images/1.jpg" alt="">
    </div>
</body>
</html>
```

######  😀5. 使用line-height让img标签垂直居中问题

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .father {
        /* position: relative; */
        width: 600px;
        height: 600px;
        background-color: pink;
        /* 虽然line-height可以让img垂直居中,但是还是会有垂直对齐问题,所以需要设置img */
        line-height: 600px;
        /* margin-left: 300px; */
    }
    img {
         /* 1.修改垂直对齐方式 */
         vertical-align: bottom;

         /* 2.浮动 */
         /* float: left; */

         /* position: absolute; */
    }
  </style>
</head>
<body>
    <div class="father">
    <img src="./images/1.jpg" alt="">
    </div>
</body>
</html>
```



😀注意点:

- 学习浮动之后, 不推荐使用行内块元素让div一行中显示, 因为可能会出现垂直对齐问题
- 推荐优先使用浮动完成效果



#### 2. 光标类型

场景: 设置鼠标光标在元素上时显示的方式

属性名: cursor

常见属性值:

###### ![image-20211022165634460](https://i.loli.net/2021/10/22/pm9GTx6ikDwovM7.png)



#### 3.边框圆角

##### 3.1 边框圆角

###### ![image-20211022170710700](https://i.loli.net/2021/10/22/gZiR5KqFoI8CeLy.png)

##### 3.2 边框圆角的常见应用

画一个正圆:

1. 盒子必须是正方形
2. 设置边框圆角为盒子宽高的一半 ---> border-radius: 50%;



胶囊按钮:

