// 实现obj的create方法
// https://zhuanlan.zhihu.com/p/98933482
// https://blog.csdn.net/sinat_41695090/article/details/82865062

// Object.create(obj)创建的是一个空对象，但是将obj的属性键值对绑定在了创建的新对象的_proto_原型属性上，
// 相当于绑定了新创建的对象的原型，将对象obj继承到_proto_属性上

function create(obj) {
   function F() {}
   F.prototype = obj
   return new F()
}

var obj1 = {
   a: 1
}

var obj2 = create(obj1)
console.log(obj2.__proto__); //obj1