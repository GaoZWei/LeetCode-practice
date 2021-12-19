// 111. 二叉树的最小深度
// 给定一个二叉树，找出其最小深度。
// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

var minDepth = function (root) {
    if (root == null) return 0
    var queue = [root]
    var minHeight = 0
    while (queue.length) {
        var len = queue.length
        minHeight++
        for (let i = 0; i < len; i++) {
            var node = queue.shift()
            if (node.left == null && node.right == null) { //最小深度特别之处,提前结束
                return minHeight
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return minHeight
}