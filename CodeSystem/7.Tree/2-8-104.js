// 104. 二叉树的最大深度

var maxDepth = function (root) {
    if (root == null) return 0
    var queue = [root]
    var count = 0 //count计数即可
    while (queue.length) {
        var len = queue.length
        count++
        for (let i = 0; i < len; i++) {
            var node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return count
};