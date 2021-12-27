// 617. 合并二叉树
// 给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。
// 你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。

//递归
var mergeTrees = function (root1, root2) {
    var preOrder = (root1, root2) => {
        if (root1 == null) {
            return root2
        }
        if (root2 == null) {
            return root1
        }
        root1.val += root2.val
        root1.left = preOrder(root1.left, root2.left)
        root1.right = preOrder(root1.right, root2.right)
    }
    return preOrder(root1, root2)
}

//迭代
var mergeTrees = function (root1, root2) {
    if (root1 == null) return root2
    if (root2 == null) return root1
    var queue = []
    queue.push(root1)
    queue.push(root2)
    while (queue.length) {
        var node1 = queue.shift()
        var node2 = queue.shift()
        node1.val += node2.val
        if (node1.left != null && node2.left != null) {
            queue.push(node1.left)
            queue.push(node2.left)
        }
        if (node1.right != null && node2.right != null) {
            queue.push(node1.right)
            queue.push(node2.right)
        }
        if (node1.left == null && node2.left != null) {
            node1.left = node2.left
        }
        if (node1.right == null && node2.right != null) {
            node1.right = node2.right
        }
    }
    return root1
}