//变量提升测试

var name = "abc"
function a() {
    console.log(name);
    if (1) {
        var name = "123"  //var提升后,undefined
    }
    console.log(name)
}
a()  //undefined 123
 
var name = "abc"
function b() {
    console.log(name);
    if (1) {
        let name = "123"  //let其他的取不到
    }
    console.log(name)
}
b()  //abc   abc