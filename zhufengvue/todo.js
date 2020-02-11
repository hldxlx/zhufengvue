const vm = new Vue({
    el:"#app",
    directives:{
        focus(el,bindings){
            //当点击当前li时让内部的输入框获取焦点
            if(bindings.value){
                el.focus();//获取焦点
            }
        }
    },
    data:{
        todos:[
            {isSelected:false,title:'睡觉'},
            {isSelected:false,title:'吃饭'}
        ],
        title:'',
        cur:''
    },
    methods:{
        add(){
            this.todos.push({
                isSelected:false,
                title:this.title
            })
            this.title = ''
        },
        remove(todo){
            this.todos = this.todos.filter(item=>item!==todo);
            //拿到当前点击的和数组里的比对相等则返回 false即可
        },
        remember(todo){
            this.cur = todo;
        },
        cancel(){
            this.cur = '';
        }
    },
    computed:{
        count(){
            return this.todos.filter(item =>!item.isSelected).length;
        }
    }
})

// 1 将数据循环到页面上
// 2 敲回车时添加新数据（需要加入isSelected）
// 3删除功能
// 4计算一下当前没有被选中的个数