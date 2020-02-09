1 v-text 取代{{}} v-cloak 解决闪烁（块)问题 后期都可以不采用 使用v-cloak要加样式
2 v-once 绑定一次，数据再变化不会导致视图刷新，写在不想刷新的标签上
3 v-html 将html字符串转化为html
4 v-for 循环（数组，对象，字符串，数字）
  <div v-for="(value,index) in/of 数组"></div>
5 事件 v-on(@)
 绑定给dom元素,函数需要定义在methods中,不能和data里的内容重名 this指向的是实例,不能使用箭头函数，
 事件源对象如果不写括号,可以自动传入，否则只能手动传入$event
 <div @事件名="fn"></div>

