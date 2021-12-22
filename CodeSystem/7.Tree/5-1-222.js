// 222. 完全二叉树的节点个数
// 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。

// 层序
var countNodes = function (root) {
    if (root == null) return 0
    var queue = []
    queue.push(root)
    var res = 0
    while (queue.length) {
        var len = queue.length
        res += len
        for (let i = 0; i < len; i++) {
            var node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return res
};

//递归
var countNodes = function (root) {
    if (root == null) return 0
    return 1 + countNodes(root.left) + countNodes(root.right)
}

//递归具体
var countNodes = function (root) {
    var getSum = (node) => {
        if (node == null) return 0
        var leftNum = getSum(node.left)
        var RightNum = getSum(node.right)
        return leftNum + RightNum + 1
    }
    return getSum(root)
}

//完全二叉树性质
var countNodes = function (root) {
    if (root == null) return 0
    var left = root.left
    var right = root.right
    var leftHeight = 0,
        rightHeight = 0
    while (left) {
        left = left.left
        leftHeight++
    }
    while (right) {
        right = right.right
        rightHeight++
    }
    if (leftHeight == rightHeight) {
        return Math.pow(2, leftHeight + 1) - 1
    }
    return 1 + countNodes(root.left) + countNodes(root.right)
}