// 429. N 叉树的层序遍历
// 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。

function Node(val, children) {
    this.val = val;
    this.children = children;
};

var levelOrder = function (root) {
    var res = []
    var queue = []
    if (root == null) return []
    queue.push(root)
    while (queue.length) {
        var len = queue.length
        var curLevel = []
        for (let i = 0; i < len; i++) {
            var node = queue.shift()
            curLevel.push(node.val)
            for (let item of node.children) {
                item && queue.push(item)
            }
        }
        res.push(curLevel)
    }
    return res
}