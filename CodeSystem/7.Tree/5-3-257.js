// 257. 二叉树的所有路径
// 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。
// 叶子节点 是指没有子节点的节点。

//回溯 (出口,逻辑,入口)
var binaryTreePaths = function (root) {
    var res = []
    var dfs = (node, cur) => {
        if (node.left == null && node.right == null) {
            cur += node.val
            res.push(cur)
            return
        }
        cur += node.val + "->"
        node.left && dfs(node.left, cur)
        node.right && dfs(node.right, cur)
    }
    dfs([], '')
    return res
};


//用栈来实现树结构
var binaryTreePaths = function (root) {
    if (root == null) return []
    var stack = []
    var res = []
    var paths = ['']
    stack.push(root)
    while (stack.length) {
        var node = stack.pop()
        var path = paths.pop()
        if (node.left == null && node.right == null) {
            path += node.val
            res.push(path)
            continue
        }
        path += node.val + '->'
        if (node.left) {
            stack.push(node.left)
            paths.push(path)
        }
        if (node.right) {
            stack.push(node.right)
            paths.push(path)
        }
    }
    return res
}