//es5继承

//父类
function Animal(name) {
    this.name = name
    this.sleep = function () {
        console.log(this.name + '在睡觉')
    }
}
//原型方法
Animal.prototype.eat = function (food) {
    console.log(this.name + '在吃' + food)
}
// var animal = new Animal('小猪')
// animal.eat("肉")


//原型链继承
function Cat() {

}
Cat.prototype = new Animal()
Cat.prototype.name = 'cat'

var cat = new Cat()
console.log(cat.name)
console.log(cat.eat('fish'))
console.log(cat.sleep())
console.log(cat instanceof Animal);
console.log(cat instanceof Cat);

//构造继承
function Cat(name) {
    Animal.call(this);
    this.name = name || 'Tom';
}
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // false  不是父类的实例
console.log(cat instanceof Cat); // true