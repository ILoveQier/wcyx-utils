# wcyx-utils
工具类函数
## 安装
```
npm install wcyx-utils
```

## vue 常用指令
```
首先在main.js中引入:
import wcyx from 'wcyx-utils'
```
#### 1.v-wcyxDrag 拖拽指令
```
在main.js中注册拖拽指令: 
Vue.directive('wcyxDrag', wcyx.wcyxDrag);
使用中注意v-wcyxDrag需要加参数，参数是想拖拽部位的类名，类名需要反引号包裹起来！

例子：
<div v-wcyxDrag="`header-hello`">
	<div class="header-hello">hello</div>
	<div>
	   asdasdasdfdsgdasg
	</div>
</div>
```
## js 常用工具
```
1. 验证是否合法url：validateURL(val)
2. 验证邮箱：isEmail(val)
```
