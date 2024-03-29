// 144. 二叉树的前序遍历
// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
function TreeNode(val, left, right) {
    this.val = (val == undefined ? 0 : val)
    this.left = (left == undefined ? null : val)
    this.right = (right == undefined ? null : val)
}

//递归
var preorderTraversal = function (root) {
    var res = []
    var dfs = (root) => {
        if (root == null) return;
        res.push(root.val)
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    return res
};

//迭代
var preorderTraversal = function (root) {
    var res = []
    if (!root) return res
    var stack = [root]
    var cur = null
    while (stack.length) {
        cur = stack.pop()
        res.push(cur.val)
        cur.right && stack.push(cur.right)
        cur.left && stack.push(cur.left)
    }
    return res
}

//统一迭代法
var preorderTraversal = function (root) {
    var res = []
    var stack = []
    if (root) stack.push(root)
    while (stack.length) {
        var node = stack.pop()
        if (!node) {
            res.push(stack.pop().val)
            continue
        }
        //前序 根左右==>右左根
        if (node.right) stack.push(node.right) //右
        if (node.left) stack.push(node.left) //左
        stack.push(node) //根
        stack.push(null)
    }
    return res
}
var root = [1, null, 2, 3]
console.log(preorderTraversal(root)) //[1,2,3]