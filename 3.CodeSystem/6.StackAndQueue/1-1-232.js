// 232. 用栈实现队列

var MyQueue = function () {
    this.stack1 = []
    this.stack2 = []
};

MyQueue.prototype.push = function (x) {
    this.stack1.push(x)
};

MyQueue.prototype.pop = function () {
    var size = this.stack2.length
    if (size) {
        return this.stack2.pop()
    }
    while (this.stack1.length) {
        this.stack2.push(this.stack1.pop())
    }
    return this.stack2.pop()
};

MyQueue.prototype.peek = function () {
    var x = this.pop() //直接调用 this.pop()
    this.stack2.push(x) //返回,不需要出队列
    return x
};

MyQueue.prototype.empty = function () {
    return !this.stack1.length && !this.stack2.length
};

var obj = new MyQueue()
obj.push(1)
obj.push(2)
obj.push(3)
var param_2 = obj.pop()
var param_3 = obj.peek()
var param_4 = obj.empty()
console.log(obj, param_2, param_3, param_4)