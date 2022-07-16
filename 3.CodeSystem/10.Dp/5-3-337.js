// 337. 打家劫舍 III
// 给定二叉树的 root 。返回 在不触动警报的情况下 ，小偷能够盗取的最高金额 。

const rob = root => {
    var postOrder = (node) => {
        if (!node) return [0, 0]
        var left = postOrder(node.left)
        var right = postOrder(node.right)
        var DoNot = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
        var Do = node.val + left[0] + right[0]
        return [DoNot, Do]
    }
    var res = postOrder(root)
    return Math.max(...res)
};
var root = [3, 2, 3, null, 3, null, 1]

console.log(rob(root));