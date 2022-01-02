// 701. 二叉搜索树中的插入操作
// 给定二叉搜索树（BST）的根节点和要插入树中的值，将值插入二叉搜索树。 

//有返回值的递归
var insertIntoBST = function (root, val) {
    var setInOrder = (root, val) => {
        if (root == null) {
            var node = new TreeNode(val)
            return node
        }
        if (root.val > val) {
            root.left = setInOrder(root.left, val)
        }
        if (root.val < val) {
            root.right = setInOrder(root.right, val)
        }
        return root
    }
    return setInOrder(root, val)
}

//无返回值的递归
var insertIntoBST = function (root, val) {
    var parent = new TreeNode(0)
    var preOrder = (cur, val) => {
        if (cur == null) {
            var node = new TreeNode(val)
            if (parent.val > val) {
                parent.left = node
            } else {
                parent.right = node
            }
            return
        }
        parent = cur
        if (cur.val > val) {
            preOrder(cur.left, val)
        } else {
            preOrder(cur.right, val)
        }
    }
    if (root == null) root = new TreeNode(val)
    preOrder(root, val)
    return root
}

//迭代
var insertIntoBST = function (root, val) {
    if (root == null) {
        root = new TreeNode(val)
    } else {
        var parent = new TreeNode(0)
        var cur = root
        while (cur) {
            parent = cur
            if (cur.val > val) {
                cur = cur.left
            } else {
                cur = cur.right
            }
        }
        var node = new TreeNode(val)
        if (parent.val > val) {
            parent.left = node
        } else {
            parent.right = node
        }
    }
    return root
}