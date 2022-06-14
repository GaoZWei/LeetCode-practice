// 235. 二叉搜索树的最近公共祖先
// 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

//递归
var lowestCommonAncestor = function (root, p, q) {
    if (root == null) return null
    // &&会从左到右执行表达式，直到某个表达式的运行结果返回false，
    // 或者可以转化为false，则返回该表达式的运行结果作为整个&&表达式的运行结果；
    //如果所有表达式的直接结果均为true，则返回最后一个表达式的执行结果作为整个&&表达式的结果
    if (root.val > p.val && root.val > q.val) {
        var left = lowestCommonAncestor(root.left, p, q)
        return left != null && left
    }
    if (root.val < p.val && root.val < q.val) {
        var right = lowestCommonAncestor(root.right, p, q)
        return right != null && right
    }
    return root
}

//迭代
var lowestCommonAncestor = function (root, p, q) {
    while (root) {
        if (root.val > p.val && root.val > q.val) {
            root = root.left
        } else if (root.val < p.val && root.val < q.val) {
            root = root.right
        } else {
            return root
        }
    }
    return null
}