// 225. 用队列实现栈
// 请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。

var MyStack = function () {
    this.queue1 = []
    this.queue2 = []
};

MyStack.prototype.push = function (x) {
    this.queue1.push(x)
};

MyStack.prototype.pop = function () {
    if (!this.queue1.length) {
        [this.queue1, this.queue2] = [this.queue2, this.queue1]
    }
    while (this.queue1.length > 1) { //queue2只是用来复制的
        this.queue2.push(this.queue1.shift())
    }
    return this.queue1.pop()
};

MyStack.prototype.top = function () {
    var x = this.pop()
    this.queue1.push(x) //只是返回值,重新添加上
    return x
};

MyStack.prototype.empty = function () {
    return !this.queue1.length && !this.queue2.length
};

var obj = new MyStack()
obj.push(1)
obj.push(2)
obj.push(3)
var param_2 = obj.pop()
var param_3 = obj.top()
var param_4 = obj.empty()
console.log(obj, param_2, param_3, param_4)