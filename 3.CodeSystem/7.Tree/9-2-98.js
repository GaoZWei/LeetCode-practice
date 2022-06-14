// 98. 验证二叉搜索树
// 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

// 中序的二叉搜索树是递增的!!!

//递归
var isValidBST = function (root) {
    var res = []
    var dfs = (root) => {
        if (root == null) return
        dfs(root.left)
        res.push(root.val)
        dfs(root.right)
    }
    dfs(root)
    for (let i = 1; i < res.length; i++) {
        if (res[i] <= res[i - 1]) return false
    }
    return true
}

// 迭代
var isValidBST = function (root) {
    var res = []
    var stack = []
    var cur = root
    while (stack.length || cur) {
        if (cur) {
            stack.push(cur)
            cur = cur.left
        } else {
            var cur = stack.pop()
            res.push(cur.val)
            cur = cur.right
        }
    }
    for (let i = 1; i < res.length; i++) {
        if (res[i] <= res[i - 1]) return false
    }
    return true
}

//在递归中判断
var isValidBST = function (root) {
    var pre = null
    var inOrder = (root) => {
        if (root == null) return true
        var left = inOrder(root.left)

        if (pre != null && pre.val >= root.val) {
            return false
        }
        pre = root

        var right = inOrder(root.right)
        return left && right
    }
    return inOrder(root)
}