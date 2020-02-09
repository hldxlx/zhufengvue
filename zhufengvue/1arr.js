let arr = [1,2,3,4];
arr.b = '100'
for(let i=0;i < arr.length;i++){//编程式
    console.log(arr[i])
}
//1    forEach,for in,for,for of 的区别
//forEach 不支持 return
arr.forEach(function (item) {//声明式（不关心如何实现）
    console.log(item);
})
for(let key in arr){//key 会变成字符串类型，包括数组的私有属性也可以打印出来
    console.log(typeof key)
}
for(let val of arr){//支持 return 并且值是of数组 （不能遍历对象）

}
// let obj = {name:'cc',age:'18'}    //Object.keys将对象的key作为新的数组
// for(let val of obj){
//     console.log(val);//报错（因为for of不能遍历对象）TypeError: obj is not iterable
//
// }
let obj = {name:'cc',age:'18'}
for(let val of Object.keys(obj)){
    console.log(obj[val]);
}


//2 filter  过滤 (场景：想删除某项时)
//     是否操作原数组：不
//     返回结果：过滤后的新数组
//     回调函数的返回结果：如果返回true 表示这一项放到新数组中
let newArr = [1,2,3,4,5,6,7].filter(function(item){
    return item>2 && item<5
})
console.log(newArr);

//3 map  (场景：想把这个数组修改一下，更新一下时用map)
// 映射 将原有的数组映射成一个新数组 [1,2,3]  <li>1</li><li>2</li><li>3</li>
//     是否操作原数组：不
//     返回结果：返回新数组
//     回调函数的返回结果：回调函数中返回什么这一项就是什么
let arr1 = [1,2,3].map(function(item){
    return `<li>${item}</li>`
})
console.log(arr1.join(''));

//4 includes 返回的是boolean
let arr3 = [1,2,3,4,55];
console.log(arr3.includes(5));

//5 find 返回找到的那一项 不会改变原数组
// 回调函数中返回true表示找到了，找到后停止循环,找不到返回的是undefined
let result = arr3.find(function (item,index) {
    return item.toString().indexOf(5) > -1
})
console.log(result);

//6 some 找true 找到true后停止 返回true 找不到返回false
let result2 = arr3.some(function (item,index) {
    return item.toString().indexOf(5) > -1
})
//7 every 找false 找到false后停止 返回false

//8 reduce 收敛 4个参数 返回的是叠加后的结果 原数组不发生变化
// 回调函数返回的结果：
//prev 代表的是数组的第一项，next是数组的第二项
//第二次prev是undefined,next是数组的第三项
var arr4 = [1, 2, 3, 4];
let sum = arr4.reduce(function(prev,next,index,item){
    //console.log(arguments)
    // return 100;//本次的返回值 会作为下一次的prev

    return prev+next;//求和
});
console.log(sum);

let sum2 = [{price:30,count:1},{price:40,count:2},{price:33,count:3}].reduce(function (prev,next) {
    //0+60
    //60+90
    //150+120
   return prev+next.price*next.count
},0);//默认指定第一次的prev
console.log(sum2,'===sum2');

let flat = [[1,2,3],[4,5,6],[7,8,9]].reduce(function (prev,next) {
    return prev.concat(next)
})
console.log(flat);