//笔试题测试
//1
function getSum(a, b) {
    console.log(a + b);
}

function getSum(a, b, c) {
    console.log(a + b + c); //NaN
}
getSum(1, 2)
console.log('-------');

//2
let name = '张三'
let obj = {
    name
}
console.log(obj.name == '张三'); //true
console.log('-------');

//3
var a = ['1', '2', '3'].map(parseInt)
console.log(a); //[ 1, NaN, NaN ]

//4  (Object的键只能是string或者symbol)
var a = {
    n: 1
}
var b = {
    a: {
        n: 2
    }
}
console.log(b); //{ a: { n: 2 } }

//5
console.log(1 < 2 < 3, 1 < 2, true < 3);
console.log(3 < 2 < 1, 3 < 2, false < 1);

//6
console.log(10 + '20' - 10); //1010

//7
// https://juejin.cn/post/7060174677846523912
var foo = {
    n: 1
}
var bar = foo
// console.log(bar); //{n:1}
foo.x = foo = {
    n: 2
}
console.log(foo.x); //undefined
console.log(bar.x); //{n:2}

//8
console.log(!''); //true
console.log(!0); //true
console.log(!'0'); //false   除了空字符串其他都为true  !true=>false
console.log(![]); //false    记住[]默认为true
console.log(!null); //true

//9
// String(a)返回的是基本类型，new String(a)创建的是一个对象 
var a = new String('A')
console.log(a); //[String: 'A']  
console.log(typeof a); //object

//10
// 0.1,0.2,0.6,0.8都是无限不循环小数
// 这里0.2-0.1===0.1之所以成立，是因为0.2是0.1的2倍，在二进制中只需要小数点向右移动一位
console.log(0.2 - 0.1 == 0.1); //true
console.log(0.8 - 0.6 == 0.2); //false