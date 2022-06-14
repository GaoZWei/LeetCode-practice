// 236. 二叉树的最近公共祖先
// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

//回溯
var lowestCommonAncestor = function (root, p, q) {
    var dfs = (root, p, q) => {
        if (root == null || root == p || root == q) return root
        var left = dfs(root.left, p, q)
        var right = dfs(root.right, p, q)
        if (left != null && right != null) return root
        if (left == null) return right
        return left
    }
    return dfs(root, p, q)
}