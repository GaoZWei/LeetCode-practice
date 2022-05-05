// 模拟new操作

// 先绑定obj到Fn.prototype的关系
// 在绑定Fn到obj的this关系

function create() {
    //获取构造函数
    var Con = [].shift.call(arguments)
    //绑定到构造函数的原型链上
    var obj = Object.create(Con.prototype)
    //绑定this,obj可以访问构造函数中属性
    var ret = Con.apply(obj, arguments)
    //返回
    return ret instanceof Object ? ret : obj
}

function A() {}
var a = create(A)
var b = a instanceof A
var c = null instanceof Object //null是基本类型
console.log(b);
console.log(c); //false