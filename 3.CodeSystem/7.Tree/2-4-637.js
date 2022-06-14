// 637. 二叉树的层平均值
// 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。

var averageOfLevels = function (root) {
    var res = []
    var queue = []
    queue.push(root)
    while (queue.length != 0) {
        var len = queue.length
        var sum = 0
        for (let i = 0; i < len; i++) {
            var node = queue.shift()
            sum += node.val
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(sum / len)
    }
    return res
};