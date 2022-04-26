// 改变this指向

// 指向window
function foo() {
    console.log(this);
}
foo() //window

// 1.call
let bar = {
    myname: 'abc',
    test1: 1
}

function foo1() {
    this.myname = "bcd"
}
foo1.call(bar)
console.log(bar);

// 2.对象调用方法设置
var obj = {
    name: "极客时间",
    showThis: function () {
        console.log(this);
    }
}
obj.showThis()

// 3.构造函数中设置
function createObj() {
    this.name = "极客时间"
    // console.log(this);
}
var myboj = new createObj()
console.log(myboj); //createObj { name: '极客时间' }

// new等价于
// var tmpObj={}
// createObj.call(tmpObj)
// return tmpObj
var num = 1
var obj2 = {
    num: 2,
    add: function () {
        num = 3
        console.log(this.num);
    }
}
obj2.add()