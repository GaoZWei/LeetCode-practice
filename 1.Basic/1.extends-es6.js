//继承的实现
// https://www.jianshu.com/p/3d09c6fe330e
// es6
class Animal {
    constructor(props) {
        this.name = props.name
    }
    eat() {
        console.log(this.name)
    }
}
var animal1 = new Animal({
    name: '动物父类'
})
// var animal1 = new Animal('动物父类')
animal1.eat()

class Bird extends Animal {
    constructor(props, myAttribute) {
        super(props)
        this.type = props.type //父类的属性
        this.attr = myAttribute //自己的私有属性
    }
    fly() { //自己的私有方法
        console.log(this.name + 'fly')
        // console.log(this)
    }
    myattribute() {
        console.log(this.type + "---" + this.attr)
    }
}

var myBird = new Bird({
    name: "燕子",
    type: 'egg animal'
}, 'Bird class')

myBird.eat()
myBird.fly()
myBird.myattribute()