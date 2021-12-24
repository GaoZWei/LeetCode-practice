// 513. 找树左下角的值
// 给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。
// 假设二叉树中至少有一个节点。

//层序
var findBottomLeftValue = function (root) {
    if (root == null) return null
    var queue = [root]
    var leftNode
    while (queue.length) {
        var len = queue.length
        for (let i = 0; i < len; i++) {
            var node = queue.shift()
            if (i == 0) {
                leftNode = node.val
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return leftNode
};


//递归 (无返回值!!!)
var findBottomLeftValue = function (root) {
    var res = null
    var maxPath = 0
    var dfs = (node, curPath) => {
        if (node.left == null && node.right == null) {
            if (curPath > maxPath) {
                maxPath = curPath
                res = node.val
            }
        }
        node.left && dfs(node.left, curPath + 1)
        node.right && dfs(node.right, curPath + 1)
    }
    dfs(root, 1)
    return res
}