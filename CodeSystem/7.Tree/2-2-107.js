// 107. 二叉树的层序遍历 II
// 给定一个二叉树，返回其节点值自底向上的层序遍历。

var levelOrderBottom = function (root) {
    var res = []
    var queue = []
    if (root == null) return res
    queue.push(root)
    while (queue.length != 0) {
        var len = queue.length
        var curLevel = []
        for (let i = 0; i < len; i++) {
            var node = queue.shift()
            curLevel.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.unshift(curLevel); //从前往后放
    }
    return res
};