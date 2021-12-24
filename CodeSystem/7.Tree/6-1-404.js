// 404. 左叶子之和
// 计算给定二叉树的所有左叶子之和。

//递归
var sumOfLeftLeaves = function (root) {
    var nodeSum = (root) => {
        if (root == null) return 0
        var leftValue = sumOfLeftLeaves(root.left)
        var rightValue = sumOfLeftLeaves(root.right)
        var midValue = 0
        if (root.left != null && root.left.left == null && root.left.right == null) {
            midValue = root.left.val
        }
        return midValue + leftValue + rightValue
    }
    return nodeSum(root)
};

//层序
var sumOfLeftLeaves = function (root) {
    if (root == null) return 0
    var queue = [root]
    var sum = 0
    while (queue.length) {
        var len = queue.length
        for (let i = 0; i < len; i++) {
            var node = queue.shift()
            if (node.left != null && node.left.left == null && node.left.right == null) {
                sum += node.left.val
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return sum
}