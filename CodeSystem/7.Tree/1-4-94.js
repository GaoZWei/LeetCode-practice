// 94. 二叉树的中序遍历
// 给你二叉树的根节点 root ，返回它节点值的 中序 遍历。
function TreeNode(val, left, right) {
    this.val = (val == undefined ? 0 : val)
    this.left = (left == undefined ? null : val)
    this.right = (right == undefined ? null : val)
}

//递归
var inorderTraversal = function (root) {
    var res = []
    var dfs = (root) => {
        if (root == null) return;
        dfs(root.left)
        res.push(root.val)
        dfs(root.right)
    }
    dfs(root)
    return res
}

//迭代
var inorderTraversal = function (root) {
    var res = []
    var stack = []
    var cur = root
    while (stack.length || cur) {
        if (cur) {
            stack.push(cur)
            cur = cur.left
        } else {
            cur = stack.pop()
            res.push(cur.val)
            cur = cur.right
        }
    }
    return res
}