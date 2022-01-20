//浅拷贝
// https://juejin.cn/post/6946136940164939813#heading-19
// 一.JS基础->17.浅拷贝
// 第一种 assign
let target = {
    a: 1
}
let obj2 = {
    b: 2
}
let obj3 = {
    c: 3
}
Object.assign(target, obj2, obj3)
// console.log(target);

//第二种 扩展运算符
var obj4 = {
    a: 1,
    b: {
        c: 1
    }
}
var obj5 = {
    ...obj4
}
// obj4.a = 2 //基本数据类型
// console.log(obj4); //{a:2,b:{c:1}}
// console.log(obj5); //{a:1,b:{c:1}}
// obj4.b.c = 2;
// console.log(obj4); //{a:2,b:{c:2}}
// console.log(obj5); //{a:1,b:{c:2}}

// 第三种 Array.slice()  已有的数组中返回特定的元素
let arr = [1, 2, 3, [4]];
let arr1 = arr.slice()
arr[3][0] = 2
console.log(arr1); // [ 1, 2, 3, [ 2 ] ]

// Array.concat 合并两个或多个数组
arr.concat() //无参就是浅拷贝

//第四种 手写浅拷贝
function shallowCopy(object) {
    if (!object || typeof object != 'object') return;
    var newObject = Array.isArray(object) ? [] : {}
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            newObject[key] = object[key]
        }
    }
    return newObject
}