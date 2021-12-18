// 515. 在每个树行中找最大值

var largestValues = function (root) {
    var res = []
    var queue = []
    if (root == null) return []
    queue.push(root)

    while (queue.length) {
        var len = queue.length
        var max = queue[0].val
        for (let i = 0; i < len; i++) {
            var node = queue.shift()
            if (max < node.val) {
                max = node.val
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(max)
    }
    return res
}