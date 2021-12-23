// 110. 平衡二叉树
// 给定一个二叉树，判断它是否是高度平衡的二叉树。

// 递归 (不好理解)
var isBalanced = function (root) {
    var getDepth = (root) => {
        if (root == null) return 0
        
        var leftDepth = getDepth(root.left)
        var rightDepth = getDepth(root.right)
        if (leftDepth == -1) return -1
        if (rightDepth == -1) return -1
        if (Math.abs(leftDepth - rightDepth) > 1) {
            return -1
        } else {
            return 1 + Math.max(leftDepth, rightDepth)
        }
    }
    return !(getDepth(root) == -1)
};


//递归
var maxDepth = (root) => {
    if (root == null) return 0
    var left = maxDepth(root.left)
    var right = maxDepth(root.right)
    return 1 + Math.max(left, right)
}

var isBalanced = function (root) {
    if (root == null) return true
    var leftDepth = maxDepth(root.left)
    var rightDepth = maxDepth(root.right)
    return Math.abs(rightDepth - leftDepth) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}