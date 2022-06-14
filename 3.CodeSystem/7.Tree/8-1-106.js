// 106. 从中序与后序遍历序列构造二叉树
// 根据一棵树的中序遍历与后序遍历构造二叉树。

var buildTree = function (inorder, postorder) {
    if (!postorder.length) return null
    var rootVal = postorder.pop()
    var rootIndex = inorder.indexOf(rootVal)
    var root = new TreeNode(rootVal)
    root.left = buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex))
    root.right = buildTree(inorder.slice(rootIndex + 1), postorder.slice(rootIndex))
    return root
}