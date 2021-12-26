// 105. 从前序与中序遍历序列构造二叉树
// 给定一棵树的前序遍历 preorder 与中序遍历  inorder。请构造二叉树并返回其根节点。

var buildTree = function (preorder, inorder) {
    if (!preorder.length) return null
    var rootVal = preorder.shift() //已经弹出来了
    var rootIndex = inorder.indexOf(rootVal)
    var root = new TreeNode(rootVal)
    root.left = buildTree(preorder.slice(0, rootIndex), inorder.slice(0, rootIndex))
    root.right = buildTree(preorder.slice(rootIndex), inorder.slice(rootIndex + 1))
    return root
}