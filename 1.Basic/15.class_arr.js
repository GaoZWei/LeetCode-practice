// 类数组转数组
// 类数组是具有length属性，但不具有数组原型上的方法。
// 常见的类数组有arguments、DOM操作方法返回的结果。

// way1:Array.from
Array.from(document.querySelectorAll('div'))


// way2:slice
Array.prototype.slice.call(document.querySelectorAll('div'))


//way3:扩展运算符
var a = [...document.querySelectorAll('div')]


//way4:concat
Array.prototype.concat.apply([], document.querySelectorAll('div'));