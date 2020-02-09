//场景  买菜 ->. 做饭
// let a = '';
// function bug() {
//     setTimeout(()=>{
//         a = '蘑菇'
//     },2000)
// }
// bug();
// function cookie() {
//     console.log(a)
// }
// cookie();//此时打印不出a来 因为异步

//解决
let a = '';
function bug(callback) {
    setTimeout(()=>{
        a = '蘑菇';
        callback(a)
    },2000)
}
bug(function cookie(val) {
    console.log(val)//打印出 蘑菇
});
//回调函数 将后续的处理逻辑传入到当前要做的事，事情做好后调用次函数
//promise 解决回调问题的 promise三个状态 成功态 失败态 等待

