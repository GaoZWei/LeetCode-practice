// 112. 路径总和
// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。

// 递归
var hasPathSum = function (root, targetSum) {
    if (root == null) return false
    var dfs = (node, count) => {
        if (count == 0 && !node.left && !node.right) return true
        if (!node.left && !node.right) return false
        if (node.left && dfs(node.left, count - node.left.val)) return true
        if (node.right && dfs(node.right, count - node.right.val)) return true
        return false
    }
    return dfs(root, targetSum - root.val)
}

//迭代
var hasPathSum = function (root, targetSum) {
    if (root == null) return false
    var nodeArr = [root]
    var valArr = [0]
    while (nodeArr.length) {
        var node = nodeArr.shift()
        var curVal = valArr.shift()
        curVal += node.val
        if (curVal == targetSum && !node.left && !node.right) {
            return true
        }
        if (node.left) {
            nodeArr.push(node.left)
            valArr.push(curVal)
        }
        if (node.right) {
            nodeArr.push(node.right)
            valArr.push(curVal)
        }
    }
    return false
}