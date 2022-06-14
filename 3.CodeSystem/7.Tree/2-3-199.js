// 199. 二叉树的右视图
// 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

var rightSideView = function (root) {
    var res = []
    var queue = []
    if (root == null) return res
    queue.push(root)
    while (queue.length != 0) {
        var len = queue.length
        while (len--) {
            var node = queue.shift()
            if (!len) { //最右侧的节点
                res.push(node.val)
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return res
}