// 144. 二叉树的后序遍历
// 给你二叉树的根节点 root ，返回它节点值的 后序 遍历。

function TreeNode(val, left, right) {
    this.val = (val == undefined ? 0 : val)
    this.left = (left == undefined ? null : val)
    this.right = (right == undefined ? null : val)
}

//递归
var postorderTraversal = function (root) {
    var res = []
    var dfs = (root) => {
        if (root == null) return;
        dfs(root.left)
        dfs(root.right)
        res.push(root.val)
    }
    dfs(root)
    return res
};

//迭代
var postorderTraversal = function (root) {
    var res = []
    if (!root) return res
    var stack = [root]
    var cur = null
    do {
        cur = stack.pop()
        res.push(cur.val)
        cur.left && stack.push(cur.left)
        cur.right && stack.push(cur.right)
    } while (stack.length)
    return res.reverse()
};

//迭代可以这样写
var postorderTraversal = function (root) {
    var res = []
    if (!root) return res
    var stack = [root]
    while (stack.length) {
        var node = stack.pop()
        res.push(node.val)
        node.left && stack.push(node.left)
        node.right && stack.push(node.right)
    }
    return res.reverse()
};

//统一迭代
var postorderTraversal = function (root) {
    var res = []
    if (root == null) return []
    var stack = []
    stack.push(root)
    while (stack.length) {
        var node = stack.pop()
        if (!node) {
            res.push(stack.pop().val)
        } else {
            stack.push(node)
            stack.push(null)
            node.right && stack.push(node.right)
            node.left && stack.push(node.left)
        }
    }
    return res
};