// 559. N 叉树的最大深度
// 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

//递归
var maxDepth = function (root) {
    if (root == null) return 0
    var depth = 0
    for (let node of root.children) {
        depth = Math.max(depth, maxDepth(node))
    }
    return depth + 1
};

//层序

var maxDepth = function (root) {
    if (root == null) return 0
    var queue = []
    queue.push(root)
    var count = 0
    while (queue.length) {
        var len = queue.length
        count++
        for (let i = 0; i < len; i++) {
            var node = queue.shift()
            for (let item of node.children) {
                item && queue.push(item)
            }
        }
    }
    return count
}