// 150. 逆波兰表达式求值
// 有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

var isNumber = (a) => {
    return !("+" == a || "-" == a || "*" == a || "/" == a)
} //isNaN
// isNaN(Number(token))  是非数字
var evalRPN = function (tokens) {
    var stack = []
    for (let token of tokens) {
        if (isNumber(token)) {
            stack.push(parseInt(token))
        } else {
            var num1 = stack.pop()
            var num2 = stack.pop()
            if (token == "+") {
                stack.push(num2 + num1)
            } else if (token == "-") {
                stack.push(num2 - num1)
            } else if (token == "*") {
                stack.push(num2 * num1)
            } else if (token == "/") {
                stack.push(num2 / num1 | 0)
            }
        }
    }
    return stack.pop()
};

var tokens = ["2", "1", "+", "3", "*"]
console.log(evalRPN(tokens))