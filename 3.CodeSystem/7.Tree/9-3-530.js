// 530. 二叉搜索树的最小绝对差

// 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。

//递归
var getMinimumDifference = function (root) {
    var res = []
    var inOrder = (root) => {
        if (root == null) return null
        inOrder(root.left)
        res.push(root.val)
        inOrder(root.right)
    }
    inOrder(root)
    var minAbs = +Infinity
    for (let i = 1; i < res.length; i++) {
        var tmp = res[i] - res[i - 1]
        if (tmp < minAbs) {
            minAbs = tmp
        }
    }
    return minAbs
};

//递归中判断
var getMinimumDifference = function (root) {
    var res = Infinity
    var pre = null
    var inOrder = (node) => {
        if (node == null) return null
        inOrder(node.left)

        if (pre) {
            res = Math.min(res, node.val - pre.val)
        }
        pre = node

        inOrder(node.right)
    }
    inOrder(root)
    return res
}

//迭代
var getMinimumDifference = function (root) {
    var stack = []
    var res = Infinity
    var pre = null
    var cur = root
    while (stack.length || cur) {
        if (cur) {
            stack.push(cur)
            cur = cur.left
        } else {
            cur = stack.pop()
            if (pre) {
                res = Math.min(res, cur.val - pre.val)
            }
            pre = cur
            cur = cur.right
        }
    }
    return res
}