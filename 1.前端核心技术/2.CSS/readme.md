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

#### ![image-20210930144505028](https://i.loli.net/2021/09/30/SpG2zy7N5UbBJ1P.png)



3.line-height行高

##### ![image-20210930171849109](https://i.loli.net/2021/09/30/blQqXim1y85AUuG.png)

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

###### ![image-20211008132412625](https://i.loli.net/2021/10/08/AZUcrt47pKbXzwx.png)

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

###### ![image-20211008140858125](https://i.loli.net/2021/10/08/dtScMNG6ryxZufs.png)



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
       <li>外边距区域 margin (<b>类似两个包装盒之间的距离</b>)</li>
   </ul>

<img src="https://i.loli.net/2021/10/09/mvGtOW3H9uV2D8g.png" alt="image-20211009160327110" style="zoom:67%;" />



##### 2.1内容区域的宽度和高度

###### ![image-20211009164514222](https://i.loli.net/2021/10/09/K8NryQJVdqEFpfx.png)



