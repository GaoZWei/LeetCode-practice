// 深拷贝
// https://juejin.cn/post/6946136940164939813#heading-26
// 一.js基础->18.实现深拷贝

// 第一种方法:
// JSON.parse和JSON.stringify 序列化和反序列化
// JSON.parse(JSON.stringify(obj))

let obj1 = {
    a: 0,
    b: {
        c: 0
    }
}
let obj2 = JSON.parse(JSON.stringify(obj1))
obj1.a = 1
obj1.b.c = 1
// console.log(obj1);
// console.log(obj2);

//第二种方法:
//hasOwnProperty限制可枚举类型  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
function deepCopy(object) {
    if (!object || typeof object != "object") return;
    var newObject = Array.isArray(object) ? [] : {}
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            newObject[key] =
                typeof object[key] == "object" ? deepCopy(object[key]) : object[key]
        }
    }
    return newObject
}
console.log(deepCopy(obj1) == obj1);

// 第三种方法:
// loadash库的_.cloneDeep方法
// var _ = require('lodash');
// var obj4 = {
//     a: 1,
//     b: {
//         f: {
//             g: 1
//         }
//     },
//     c: [1, 2, 3]
// }
// var obj5 = _.cloneDeep(obj1)
// console.log(ob4.b.f == ob5.b.f);