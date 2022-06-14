// 572.另一个树的子树
// 给你两棵二叉树 root 和 subRoot 。
// 检验 root 中是否包含和 subRoot 具有相同结构和节点值的子树。
// 如果存在，返回 true ；否则，返回 false 。

var isSubtree = function (root, subRoot) {
    //判断相同的部分
    var isSameTree = (a, b) => {
        if (a == null && b == null) return true
        if (a == null || b == null) return false
        return a.val == b.val && isSameTree(a.left, b.left) && isSameTree(a.right, b.right)
    }
    if (root == null) return false
    if (isSameTree(root, subRoot)) return true
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};