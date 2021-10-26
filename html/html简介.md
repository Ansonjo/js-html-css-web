==属于web的结构或者说web显示的框架,主要提供页面元素和内容==

==CSS记录网页元素的外观和位置==

==JavaScript    交互==



HTML的骨架结构

html表示一个网页,网页包含head,head包含title;网页还包含body

<strong>内容</strong>
这是双标签

```html
<br> //换行 line break
<hr> //水平线 horizontal line
这些是单标签
```

##### 属性注意点:

1. 属性之间没有顺序之分;
2. 标签的属性写在开始标签内部
3. 标签名与属性之间, 属性与属性之间用空格隔开



##### html标签与标签之间的关系可分为:

父子关系(嵌套关系)



兄弟关系(并列关系)



##### html标签分为:

1. ==排版标签==
   1. 标题标签
   2. 段落标签
   3. 换行标签
   4. 水平线标签

2. 文本格式化标签
3. 媒体标签
   1. 图片标签
   2. 音频标签
   3. 视频标签
4. 链接标签



### 排版标签

##### 标题标签

```html
<h1>1级标题</h1>
<h2>2级标题</h2>
<h3>3级标题</h3>
<h4>4级标题</h4>
<h5>5级标题</h5>
<h6>6级标题</h6>
```

语义: 1~6级标签, 重要程度依次递减

特点:

- 文字都有加粗
- 文字都有变大,并且从1~6文字逐渐减小
- 独占一行



##### 段落标签

```html
<p>我是一段文字<p>
```

特点:

- 段落之间存在间隙

- 独占一行

  

##### 换行标签

```html
<p>我是一段<br>文字<p>
    //效果是:
    //我是一段
    //文字
<button>btn1</button><br>
<button>btn2</button><br>
//这样btn1和btn2就不会在同一行显示了    
```



##### 水平线标签

```html
<hr>
```



### 文本格式化标签

场景:	需要让文字<strong>加粗</strong>、<ins>下划线</ins>、<em>倾斜</em>、<del>删除线</del>等效果

<img src="https://gitee.com/ZheJiangYiLeYouXianGongSi_admin/Typora_imgs/raw/master/img/20210724113946.png" alt="image-20210724113946231" style="zoom:67%;" />



==推荐使用第二组,他们都是双标签==



### 媒体标签

##### 图片标签

场景:	在网页中显示图片

```html
<img src="" alt="" title=""  width=数字 height=数字>
```

特点:

- 单标签
- img标签需要展示对应的效果,需要借助标签的属性进行设置!



##### 图片标签的src属性

属性名:	src

属性值:	目标图片的路径

注意点:

- 当前网页和目标图片在同一个文件夹中,路径直接写目标图片的名字即可 (包括后缀名)
- 路径的情况有很多,	稍后会详细介绍



##### 图片标签的alt属性

属性名:	alt

属性值:	替换文本

- 当图片加载失败时, 才显示alt的文本
- 当图片加载成功, 不会显示alt的文本



##### 图片标签的title属性

属性名: title

属性值:	提示文本

- 当鼠标悬停时,才显示的文本

注意点: 

​	title属性不仅仅可以用于图片标签, 还可以用于其他标签



##### 图片标签的width和height属性

属性名:	width和height

属性值:	宽度和高度	(数字)

注意点:	

- 如果只设置width和height中的一个,	另一个没设置的会自动等比例缩放( 此时图片不会变形)
- 如果同时设置了width和height两个,若设置不当此时图片可能会变形



##### 相对路径(项目常用)

相对路径:	从==当前文件开始== 出发找目标文件的过程

相对路径的分类:	

- 同级目录  直接写文件名
- 下级目录 直接写:   文件夹名/目标文件名
- 上级目录 直接写:   ../目标文件名



vscode中路径的快捷操作

- 同级和下级目录:	./之后选择即可

- 上级目录:   ../之后选择即可



##### 音频标签

场景:	在页面中插入音频

```html
<audio src="./music.mp3"  controls autoplay loop></audio> //controls,autoplay,autoplay,loop的属性值是可以省略的
```

常见属性:

###### <img src="https://gitee.com/ZheJiangYiLeYouXianGongSi_admin/Typora_imgs/raw/master/img/20210724155350.png" alt="image-20210724155349998" style="zoom: 67%;" />



autoplay在google中不支持是为了保护用户隐私,IE支持

注意点:

- 音频标签目前支持三种格式: MP3、Wav、Ogg



##### 视频标签

场景：	在页面中插入视频

```html
<video src="./video.mp4" controls autoplay muted loop></video>
```

常见属性:

###### ![image-20210724161649663](https://gitee.com/ZheJiangYiLeYouXianGongSi_admin/Typora_imgs/raw/master/img/20210724161649.png)



注意点:

- 视频标签目前支持三种格式: MP4、WebM、Ogg



### 链接标签

场景:	点击之后,	从一个页面跳转到另一个页面

称呼:	a标签、超链接、锚链接

```html
<a href="./目标网页.html">超链接</a>
```

特点:

- 双标签, 可以包裹内容
- 如果需要a标签点击之后去指定页面,  需要设置a标签的href属性



显示特点:

- a标签默认文字有下划线
- a标签从未点击过, 默认文字显示蓝色
- a标签点击过之后,  文字显示为紫色(清除浏览器历史记录可恢复蓝色)



##### 链接标签的target属性

属性名:	target

属性值:	目标网页的打开形式

![image-20210724165113809](https://gitee.com/ZheJiangYiLeYouXianGongSi_admin/Typora_imgs/raw/master/img/20210724165113.png)

```html
<a href="https://www.baidu.com" target="_blank">百度一下</a>
```



##### 空链接

```html
<a href="#">空链接</a>
```

功能:

- 点击之后回到网页顶部
- 开发中不确定该链接最终跳转位置,  用空链接占个位置



### 一、列表标签

场景: 在网页中按照==行==展示相关性的内容, 如: 新闻列表、排行榜、账单等

特点： 按照行的方式， 整齐显示内容

种类： 无序列表、有序列表、自定义列表

- 无序列表
- 有序列表
- 自定义列表



##### 无序列表

场景:	在网页中表示一组无顺序之分的列表,如:	新闻列表

```
<ul>
	<li>内容</li>
</ul>
```



标签组成:

###### <img src="https://gitee.com/ZheJiangYiLeYouXianGongSi_admin/Typora_imgs/raw/master/img/20210726091249.png" alt="image-20210726091248837" style="zoom: 80%;" />

ul->u->无序的意思->l->list->列表

li->list item

显示特点:

- 列表的每一项前默认显示圆点标识

注意点:

- ul标签中只允许包含li标签
- ==li标签可以包含任意内容==



##### 有序列表

场景:	在网页中表示一组有顺序之分的列表,如:	排行榜

```
<ol>
	<li>内容</li>
</ol>
```



标签组成:

ol->order list->有序列表

li->list item

显示特点:

- 列表的每一项前默认显示序号标识

注意点:

- ol标签中只允许包含li标签
- li标签可以包含任意内容



##### 自定义列表

场景： 在网页的底部导航中通常会使用自定义列表实现

###### ![image-20211025090622052](https://i.loli.net/2021/10/25/E7hQIKlg9LAs2OS.png)

标签组成：

###### ![image-20211025091111868](https://i.loli.net/2021/10/25/5thMrcof4svyDku.png)

显示特点：

- dd前会默认显示缩进效果

注意点：

- dl 标签中只允许包含dt/dd标签
- dt/dd标签可以包含任意内容

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"><title>Document</title>
</head>
<style>
    body {
        color: #111;
    }
    a {
        text-decoration: none;
        color: #111;
    }
</style>
<body>
    <dl>
        <dt>帮助中心</dt>
        <dd><a href="#">账户管理</a></dd>
        <dd><a href="#">购物指南</a></dd>
        <dd><a href="#">订单操作</a></dd>
    </dl>
</body>
</html>
```





### 二、表格标签

##### 1.	表格的基本标签

​		场景: 在网页中以行+ 列的单元格的方式整齐展示和数据, 如: 学生成绩表

​		基本标签: 

###### 		![image-20211025101602441](https://i.loli.net/2021/10/25/4dvO7StEkwc5iye.png)

​	注意点:

- 标签的嵌套关系: table > tr > td

##### 2.   表格相关属性

场景: 设置表格基本展示效果

常见相关属性:

###### ![image-20211025103040371](https://i.loli.net/2021/10/25/WMjNFuXsZhHO84T.png)

注意点:

- 实际开发时,针对样式效果推荐==使用CSS设置==

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- border :表格的边框 -->
    <!-- width -->
    <!-- height -->
    <!-- 实际开发中用CSS -->
    <table border="1" width="300" height="300">
        <tr>
            <td>姓名</td>
            <td>成绩</td>
            <td>评语</td>
        </tr>
        <tr>
            <td>小哥哥</td>
            <td>100分</td>
            <td>小哥哥真帅气</td>
        </tr>
        <tr>
            <td>小姐姐</td>
            <td>100分</td>
            <td>小姐姐真漂亮</td>
        </tr>
        <tr>
            <td>总结</td>
            <td>郎才女貌</td>
            <td>郎才女貌</td>
        </tr>
    </table>
</body>
</html>
```

##### 3.   表格标题和表头单元格标签

场景: 在表格中表示整体大标题和一列小标题

其他标签:

- caption 表格大标题   表示表格整体大标题, 默认在表格整体顶部居中位置显示
- th   表头单元格   表示一列小标题, 通常用于表格第一行, 默认内部文字加粗并居中显示

注意点:

- caption标题写在table标签内部
- th标签写在tr标签内部( 用于替换td标签)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"><title>Document</title>
</head>
<body>
    <!-- caption表示表格的大标题 -->
    <!-- th(table header)表示一列小标题 -->
    <table border="1" width="300" height="300">
        <caption><h3>学生成绩单</h3></caption>
        <tr>
            <th>姓名</th>
            <th>成绩</th>
            <th>评语</th>
        </tr>
        <tr>
            <td>小哥哥</td>
            <td>100分</td>
            <td>小哥哥真帅气</td>
        </tr>
        <tr>
            <td>小姐姐</td>
            <td>100分</td>
            <td>小姐姐真漂亮</td>
        </tr>
        <tr>
            <td>总结</td>
            <td>郎才女貌</td>
            <td>郎才女貌</td>
        </tr>
    </table>
</body>
</html>
```

##### 4.	表格的结构标签(了解)

场景;  让表格的内部结构分组, 突出表格的不同部分 ( 头部、主体、底部 ），使语义更加清晰

###### ![image-20211025105916462](https://i.loli.net/2021/10/25/AJYLv3715HquwSg.png)

结构标签： 

###### ![image-20211025105639623](https://i.loli.net/2021/10/25/wKoaYmyAG3qiMRn.png)

注意点:

- ==表格结构标签内部用于包裹tr标签==
- 表格的结构标签可以省略

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"><title>Document</title>
</head>
<body>
    <!-- thead -->
    <!-- tbody -->
    <!-- tfoot -->
    <table border="1" width="300" height="300">
        <caption><h3>学生成绩单</h3></caption>
        <thead>
            <tr>
                <th>姓名</th>
                <th>成绩</th>
                <th>评语</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>小哥哥</td>
                <td>100分</td>
                <td>小哥哥真帅气</td>
            </tr>
            <tr>
                <td>小姐姐</td>
                <td>100分</td>
                <td>小姐姐真漂亮</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>总结</td>
                <td>郎才女貌</td>
                <td>郎才女貌</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>
```



##### 5.	合并单元格

场景:	将==水平或垂直==多个单元格==合并成一个单元格==

==步骤:==

1.明确合并哪几个单元格

2.通过左上原则, 确定保留谁删除谁

- 上下合并 -->  只保留最上的, 删除其他
- 左右合并 --> 只保留最左的, 删除其他

3.给保留的单元格tr标签设置属性: 跨行合并( rowspan="垂直合并的个数") 或者跨列合并( colspan = "水平合并的个数")

注意点:

==不能跨thead、tbody、tfoot进行合并的==

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"><title>Document</title>
</head>
<body>
    <!-- thead -->
    <!-- tbody -->
    <!-- tfoot -->
    <table border="1" width="300" height="300">
        <caption><h3>学生成绩单</h3></caption>
        <thead>
            <tr>
                <th>姓名</th>
                <th>成绩</th>
                <th>评语</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>小哥哥</td>
                <td rowspan="2">100分</td>
                <td>小哥哥真帅气</td>
            </tr>
            <tr>
                <td>小姐姐</td>
                <td>小姐姐真漂亮</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>总结</td>
                <td colspan="2">郎才女貌</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>
```



### 三、表单标签

#### 1.input系列标签

| type属性值 | 说明                                    |
| ---------- | --------------------------------------- |
| text       | 文本框, 用于输入单行文本                |
| password   | 密码框, 用于输入密码                    |
| radio      | 单选框, 用于多选一                      |
| checkbox   | 多选框, 用于多选多                      |
| file       | 文件选择, 用于之后上传文件              |
| submit     | 提交按钮, 用于提交                      |
| reset      | 重置按钮, 用于重置，恢复默认状态        |
| button     | 普通按钮,默认无功能, 之后配合js添加功能 |
| range      | 滑块功能,用于修改一个整数范围内的值     |
| number     | 整数微调框                              |

##### 1.1 input基本介绍

对于输入文本的都有一个属性:

placeholder --> 占位符,提示用户输入的什么内容

value --> 用户输入的内容,提交后发送给服务器

name --> 当前控件的含义, 提交之后可以告诉后端发送过去的数据是什么含义,其实就是 后端分析的body

后端接收到的数据的格式是: name的属性值 = value的属性值



##### 1.2 input系列标签 - 单选框( radio ) 

常用属性

name  --> 用于分组. 分在同一组,就会实现单选效果

checked --> 默认选中 (多选框也有该属性)

##### 1.3  input系列标签 - 文件选择( file )

常用属性: 

multiple --> 多文件选择

##### 1.4 input系列标签 - 按钮(submit、reset、button）

注意点：

- 如果需要实现以上按钮功能， 需要配合form标签使用
- form使用方法： 用form标签把表单标签一起包裹起来即可



#### 2.button按钮标签

场景： 在网页中显示用户点击的按钮

标签名： button

type属性值 （同input的按钮系列一样）

注意点：

- 谷歌浏览器中button默认是提交按钮
- button标签是双标签，可便于包裹其他内容： 文字、图片等
- 如果需要实现以上按钮功能， 需要配合form标签使用



#### 3.select下拉菜单标签

场景：	在网页中提供多个选择项的下拉菜单表单控件

标签组成;

- select标签:  下拉菜单的整体
- option标签: 下拉菜单的每一项

常见属性:

- selectd : 下拉菜单的默认选中

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"><title>Document</title>
</head>
<body>
    <!-- 下拉菜单 -->
    <!-- select: 表示下拉菜单的整体 -->
    <!-- option: 表示下拉菜单的每一项 -->
所在城市: <select>
            <option>上海</option>
            <option selected>北京</option>
            <option>广州</option>
            <option>深圳</option>
        </select>
</body>
</html>
```



#### 4.textarea文本域标签

场景: 在网页输入多行文本

常见属性:

cols: 可见宽度

rows: 可见高度

注意点:

右下角可以拖拽改变大小

实际开发时针对样式效果推荐使用CSS设置



#### 5.label 标签

场景： 常用于绑定内容与表单标签的关系

使用方法1：

1. 使用label标签把内容（ 如： 文本 ）包裹起来
2. 在表单标签添加id属性
3. 在label标签的for属性中设置对的id属性值

使用方法2：

1. 直接使用label标签把内容 （ 如： 文本 ）和表单标签一起包裹起来
2. 需要把label标签的for属性删除即可

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"><title>Document</title>
</head>
<body>
    性别:
    <input type="checkbox"  id="male"><label for="male">男</label>
    <label><input type="checkbox">女</label>
</body>
</html>
```





### 四、语义化标签

##### 1.1 没有语义的布局标签(div和span)

场景: 实际开发网页时会大量频繁的使用到div和span这两个没语义的布局标签

div : 独占一行

span标签: 一行可以显示多个

#####  1.2 有语义的布局标签

场景: 在html5新版本中, 推出了一些有语义的布局标签供开发者使用

###### ![image-20211025143105116](https://i.loli.net/2021/10/25/eZthgu25BT7LCcv.png)

