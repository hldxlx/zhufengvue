1 v-text 取代{{}} v-cloak 解决闪烁（块)问题 后期都可以不采用 使用v-cloak要加样式
2 v-once 绑定一次，数据再变化不会导致视图刷新，写在不想刷新的标签上
3 v-html 将html字符串转化为html
4 v-for 循环（数组，对象，字符串，数字）
  <div v-for="(value,index) in/of 数组"></div>
5 事件 v-on(@)
 绑定给dom元素,函数需要定义在methods中,不能和data里的内容重名 this指向的是实例,不能使用箭头函数，
 事件源对象如果不写括号,可以自动传入，否则只能手动传入$event
 <div @事件名="fn"></div>
6 v-model(如果checkbox selected多选是数组,提供一个value属性)(radio checkbox分组靠的是v-model)，checked selected不存在
7 修饰符 .number .lazy
  按键修饰符 .enter .ctrl .keyCode
  事件
       @事件.stop```
       stopPropagation,cancelBubble=true,
       @事件.capture
       xxx.addEventListener('click',fn,true),
       @事件.prevent
       preventDefault,returnValue=false
       @事件.once
       on('click') off('click')
       @事件.self
       ```
  jquery once
  e.srcElement&&e.target 判断事件源绑定事件
8 filters实例上可以用
{{'123' | my(1,2,3)}}
filters:{
       my(data,param1,param2,param3){
    }
}
9 computed计算‘属性’ 不是方法
方法不会有缓存,computed会根据依赖(归Vue管理的数据,可以响应式变化的)的属性进行缓存
两部分组成有get和set（不能只写set）一般情况下 通过js赋值影响其他人或者表单元素设置值
的时候会调用set方法
10 v-if/v-show
v-if 操作的是dom v-if可以和v-else-if,v-else连写
v-show 操作的是样式
11 v-bind简写：
动态绑定"属性"
<img :src="src"/>
12 实现单页开发的方式
通过hash记录跳转的路径（可以产生历史管理）
浏览器自带的历史管理的方法 history（history.pushState()）可能会导致404错误
开发时使用hash的方式 上线的话我们会使用history的方式





