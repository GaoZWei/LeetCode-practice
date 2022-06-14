// 669. 修剪二叉搜索树
// 给你二叉搜索树的根节点 root， 同时给定最小边界low 和最大边界 high。 通过修剪二叉搜索树， 使得所有节点的值在[low, high] 中。 修剪树不应该改变保留在树中的元素的相对结构（ 即， 如果没有被移除， 原有的父代子代关系都应当保留）。 可以证明， 存在唯一的答案。

//递归
var trimBST = function (root, low, high) {
    if (root == null) return null
    if (root.val < low) {
        var right = trimBST(root.right, low, high)
        return right
    }
    if (root.val > high) {
        var left = trimBST(root.left, low, high)
        return left
    }
    root.left = trimBST(root.left, low, high)
    root.right = trimBST(root.right, low, high)
    return root
}


//迭代
var trimBST = function (root, low, high) {
    if (root == null) return null
    while (root != null && (root.val < low || root.val > high)) {
        if (root.val < low) {
            root = root.right
        } else {
            root = root.left
        }
    }

    var cur = root
    while (cur != null) {
        while (cur.left && cur.left.val < low) {
            cur.left = cur.left.right
        }
        cur = cur.left
    }

    cur = root
    while (cur != null) {
        while (cur.right && cur.right.val > high) {
            cur.right = cur.right.left
        }
        cur = cur.right
    }
    return root
}