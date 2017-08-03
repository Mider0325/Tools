[HTML_module 构建工具](./html_module)
# 简介
>1. 基于gulp插件实现的html模块化构建工具
>2. 主要适用于多页面的官网静态页面项目，解决了多页面项目中类似header，footer，一次变化需要多个文件修改的问题

### 安装
```
  npm install gulp -g
  npm install 
```
###  运行
```
npm run build
```
### 目录

### example
1. /views/demo1.html
```
<!DOCTYPE html>
<html lang="en">
    <!--引入对应的模板-->
    <!--@params1 为需要引入的模块的文件（必填）-->
    <!--@params2 传入的变量为JSON 格式（选填）-->
    @@include("../template/test.html",{
    	"title":"demo1"
    })
<body>
	<div>这是demo1测试页面</div>
</body>
</html>
```
2. /template/test.html
```
<head>
	<meta charset="UTF-8">
	<title>@@title</title>
</head>

```
3. 运行 `npm run build` 命令后可在dist 目录下看到生成的文件
Result:
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>demo1</title>
</head>

<body>
	<div>这是demo1测试页面</div>
</body>
</html>
```