// 20. 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 简单switch
var isValid = function (s) {
    if (s.length % 2 != 0) return false
    var stack = []
    for (let c of s) {
        switch (c) {
            case "(":
            case "[":
            case "{":
                stack.push(c);
                break;
            case ")":
                if (stack.pop() != "(") return false
                break
            case "]":
                if (stack.pop() != "[") return false
                break
            case "}":
                if (stack.pop() != "{") return false
                break
        }
    }
    return stack.length == 0
}

// map+栈
var isValid = function (s) {
    // s = s.split("")  可以不用split
    if (s.length % 2 != 0) return false
    var stack = []
    var map = new Map([
        [")", "("],
        ["}", "{"],
        ["]", "["]
    ])

    for (let c of s) {
        if (map.get(c)) {
            if (map.get(c) != stack[stack.length - 1]) {
                return false
            } else {
                stack.pop()
            }
        } else {
            stack.push(c)
        }
    }
    return stack.length == 0
}

var s = "()[]{}"
console.log(isValid(s))