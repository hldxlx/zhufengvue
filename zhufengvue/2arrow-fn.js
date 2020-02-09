/**
 * Created by cyb on 2020/2/7.
 */
// function a(b) {
//     return b+1
// }
// let a = (b) => b+1;//去掉function关键字 参数有一个可以省略小括号 小括号和大括号之间有一个箭头
//如果没大括号则直接是返回值 有大括号必须写return


// function a(b) {  //这个不是闭包
//     return function (c) {
//         return b+c
//     }
// }
// let a = b =>c =>b+c;    //高阶函数 （>=俩箭头的）
// console.log(a(1)(2));

let k = function (b) {  //这个是闭包
    return function (c) {
        return b+c
    }
}();
//闭包 函数折行的一瞬间叫闭包，（不销毁的作用域）,当折行后返回的结果必须是引用数据类型,
//被外界变量接受 此时这个函数不会销毁（模块化）



