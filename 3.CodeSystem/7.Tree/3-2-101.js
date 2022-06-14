// 101. 对称二叉树
// 给定一个二叉树，检查它是否是镜像对称的。

//递归实现
var isSymmetric = function (root) {

    var compare = (left, right) => {
        if (left == null && right == null) return true
        if (left == null || right == null || left.val != right.val) return false

        var outSide = compare(left.left, right.right)
        var inSide = compare(left.right, right.left)
        return outSide && inSide
    }
    if (root == null) return true

    return compare(root.left, root.right)
};

//队列实现
var isSymmetric = function (root) {
    if (root == null) return true
    var queue = []
    queue.push(root.left)
    queue.push(root.right)

    while (queue.length) {
        var leftNode = queue.shift()
        var rightNode = queue.shift()
        if (leftNode == null && rightNode == null) continue
        if (leftNode == null || rightNode == null || leftNode.val != rightNode.val) return false
        // if ((leftNode == null && rightNode != null) || (leftNode != null && rightNode == null) || leftNode.val != rightNode.val) return false
        queue.push(leftNode.left)
        queue.push(rightNode.right)
        queue.push(leftNode.right)
        queue.push(rightNode.left)
    }
    return true
}

//栈实现
var isSymmetric = function (root) {
    if (root == null) return true
    var stack = []
    stack.push(root.left)
    stack.push(root.right)
    while (stack.length) {
        var rightNode = stack.pop()
        var leftNode = stack.pop()
        if (leftNode == null && rightNode == null) continue
        if (leftNode == null || rightNode == null || leftNode.val != rightNode.val) return false
        stack.push(leftNode.left)
        stack.push(rightNode.right)
        stack.push(leftNode.right)
        stack.push(rightNode.left)
    }
    return true
}