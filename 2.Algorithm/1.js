// 103.蛇形遍历二叉树
// https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/
var zigzagLevelOrder = function (root) {
    if (!root) return []
    var queue = [root]
    var res = []
    var isLeft = true
    while (queue.length) {
        var levelList = []
        const size = queue.length; //size需要提出来
        for (let i = 0; i < size; i++) {
            var node = queue.shift()
            if (isLeft) {
                levelList.push(node.val)
            } else {
                levelList.unshift(node.val)
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(levelList)
        isLeft = !isLeft
    }
    return res
}