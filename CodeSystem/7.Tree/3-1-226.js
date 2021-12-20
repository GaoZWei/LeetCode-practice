// 226. 翻转二叉树

//递归
var invertTree = function (root) {
    var inverNode = (left, right) => {
        var tmp = left
        left = right
        right = tmp
        root.left = left
        root.right = right
    }
    if (root == null) {
        return root
    }
    inverNode(root.left, root.right)
    invertTree(root.left)
    invertTree(root.right)
    return root
};

//统一迭代
var invertTree = function (root) {
    var inverNode = (root, left, right) => {
        var tmp = left
        left = right
        right = tmp
        root.left = left
        root.right = right
    }
    var stack = []
    if (root == null) return root
    stack.push(root)
    while (stack.length) {
        var node = stack.pop()
        if (node != null) {
            node.right && stack.push(node.right)
            node.left && stack.push(node.left)
            stack.push(node)
            stack.push(null)
        } else {
            node = stack.pop()
            inverNode(node, node.left, node.right)
        }
    }
}

//层序遍历
var invertTree = function (root) {
    var inverNode = (root, left, right) => {
        var tmp = left
        left = right
        right = tmp
        root.left = left
        root.right = right
    }
    if (root == null) return root
    var queue = []
    queue.push(root)
    while (queue.length) {
        var len = queue.length
        for (let i = 0; i < len; i++) {
            var node = queue.shift()
            inverNode(node, node.left, node.right)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return root
}