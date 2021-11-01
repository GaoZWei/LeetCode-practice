// 95. 不同的二叉搜索树 II (递归+记忆化递归)
// 给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。

// 递归不断生成左右树,进行拼接
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var generateTrees = function (n) {
    if (n == 0) return []
    var buildTree = (left, right) => {
        if (left > right) return [null]
        if (left == right) return [new TreeNode(left)]
        var res = []
        for (let i = left; i <= right; i++) {
            var leftTrees = buildTree(left, i - 1)
            var rightTrees = buildTree(i + 1, right)
            for (let leftTree of leftTrees) {
                for (let rightTree of rightTrees) {
                    var node = new TreeNode(i)
                    node.left = leftTree
                    node.right = rightTree
                    res.push(node)
                }
            }
        }
        return res
    }
    return buildTree(1, n)
};
// 记忆化代码
var generateTrees = function (n) {
    if (n == 0) return []
    //记忆化
    var memory = new Array(n + 1)
    for (let i = 0; i < memory.length; i++) {
        memory[i] = new Array(n + 1)
    }
    var buildTree = (left, right) => {
        if (left > right) return [null]
        if (left == right) return [new TreeNode(left)]
        if (memory[left][right]) return memory[left][right]
        var res = []
        for (let i = left; i <= right; i++) {
            var leftTrees = buildTree(left, i - 1)
            var rightTrees = buildTree(i + 1, right)
            for (let leftTree of leftTrees) {
                for (let rightTree of rightTrees) {
                    var node = new TreeNode(i)
                    node.left = leftTree
                    node.right = rightTree
                    res.push(node)
                }
            }
        }
        return memory[left][right] = res
    }
    return buildTree(1, n)
}

var n = 3
console.log(generateTrees(n))