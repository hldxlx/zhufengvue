console.log(Promise);
// resolve 代表 转向成功态
// reject 代表 转向失败态
// resolve,reject都是函数
//promise 的实例就有一个then方法,then方法中有两个参数
// promise好处：不用自己传callback
let p = new Promise((resolve,reject)=>{
    console.log(1);
    setTimeout(()=>{
        let a = '蘑菇';
        resolve(a);
    },2000)
})
p.then((data)=>{
    console.log(data);
},()=>{})
console.log(2);