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