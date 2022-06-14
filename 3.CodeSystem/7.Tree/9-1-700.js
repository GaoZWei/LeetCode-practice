// 700. 二叉搜索树中的搜索

//递归
var searchBST = function (root, val) {
    if (root == null) return null
    if (root.val > val) {
        return searchBST(root.left, val)
    } else if (root.val < val) {
        return searchBST(root.right, val)
    } else {
        return root
    }
}

//迭代
var searchBST = function (root, val) {
    while (root != null) {
        if (root.val > val) {
            root = root.left
        } else if (root.val < val) {
            root = root.right
        } else {
            return root
        }
    }
    return root
};