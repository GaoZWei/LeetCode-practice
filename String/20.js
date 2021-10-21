// 20. 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

//思路1:简单使用栈实现
var isValid = function (s) {
    if (s.length % 2) return false
    var stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
            stack.push(s[i])
        } else {
            if (stack.length == 0) return false
            var top = stack[stack.length - 1]
            if ((s[i] == ")" && top == "(") || (s[i] == "}" && top == "{") || (s[i] == "]" && top == "[")) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length == 0
};

//思路2:使用栈+switch实现
var isValid = function (s) {
    if (s.length % 2) return false
    var stack = []
    for (let c of s) {
        switch (c) {
            case "(":
            case "[":
            case "{":
                stack.push(c)
                break
            case ")":
                if (stack.pop() !== "(") return false
                break
            case "}":
                if (stack.pop() !== "{") return false
                break
            case "]":
                if (stack.pop() !== "[") return false
                break
        }
    }
    return stack.length == 0
}

// 思路三: map+栈
var isValid = function (s) {
    s = s.split('')
    var stack = []
    if (s.length % 2) return false
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
};

//map结构测试
var isValid = function (s) {
    var map = new Map()
    map.set(1, 2)
    console.log(map)
    var map1 = {
        "1": '2'
    }
    console.log(map1)
}
var s = "()[]{}"
console.log(isValid(s))