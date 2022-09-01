// js实现二维数组

//https://www.csdn.net/tags/OtDaEg3sODc3MzgtYmxvZwO0O0OO0O0O.html
// way1:
var m = 4,
    n = 3
var arr = new Array(m)
for (let i = 0; i < m; i++) {
    arr[i] = new Array(n).fill(0)
}
console.log(arr);

// way2:Array.from实现
var m = 4;
var n = 5;
let arr1 = Array.from(Array(m), () => new Array(n));
console.log(arr1);
// console.log(Array(3));

// way3:fill+map
var m = 4;
var n = 5;
var arr2 = Array(m).fill().map(() => Array(n));
console.log(arr2);

// Array.from(类数组转化为数组)
var a = 'abc'
var b = Array.from(a) //字符转成数组
// console.log(b);

//way4:
var arr = [];
var n = 1;
for (var i = 0; i < 10; i++) {
    arr[i] = []; //每行有10列
    for (var j = 0; j < 10; j++) {
        arr[i][j] = n;
        n++;
    }
}
// console.log(arr);

var dp = new Array(2).fill(0)
    .map(x => x + 1);
var dp = new Array(2).fill(0)
    .map(x => new Array(3).fill(0));
console.log(dp);


// var dp = new Array(m).fill('no').map(new Array(n).fill('no'))  错的