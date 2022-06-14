// 1047. 删除字符串中的所有相邻重复项
// 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
// 在 S 上反复执行重复项删除操作，直到无法继续删除。

//栈
var removeDuplicates = function (s) {
    var stack = []
    for (let c of s) {
        if (c == stack[stack.length - 1]) {
            stack.pop()
        } else {
            stack.push(c)
        }
    }
    return stack.join("")
};

var s = "abbaca"
console.log(removeDuplicates(s))