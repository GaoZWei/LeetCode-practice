// 从前序与中序遍历序列构造二叉树
// 给定一棵树的前序遍历 preorder 与中序遍历  inorder。请构造二叉树并返回其根节点。

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
// 思路:
// 递归传递左子树和右子树
var buildTree = function (preorder, inorder) {
    if (inorder.length == 0) {
        return null
    }
    var root = new TreeNode(preorder[0]) //根节点
    var mid = inorder.indexOf(preorder[0]) //根节点在中序的坐标
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))
    return root
};


// 优化slice
// 用指针代替
var buildTree = function (preorder, inorder) {
    const helper = (pre_start, pre_end, in_start, in_end) => {
        if (pre_start > pre_end) {
            return null
        }
        var root = new TreeNode(preorder[pre_start]) //根节点
        var mid = inorder.indexOf(preorder[pre_start]) //根节点在中序的坐标
        var left_num = mid - in_start //左子树的数量
        root.left = helper(pre_start + 1, pre_start + left_num, in_start, mid - 1)
        root.right = helper(pre_start + left_num + 1, pre_end, mid + 1, in_end)
        return root
    }
    return helper(0, preorder.length - 1, 0, inorder.length - 1)
}


// 用map优化indexOf,空间换时间
var buildTree = function (preorder, inorder) {
    const map = new Map()
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i)
    }
    const helper = (pre_start, pre_end, in_start, in_end) => {
        if (pre_start > pre_end) {
            return null
        }
        var root = new TreeNode(preorder[pre_start]) //根节点
        // var mid = inorder.indexOf(preorder[pre_start]) //根节点在中序的坐标
        var mid = map.get(preorder[pre_start])
        var left_num = mid - in_start //左子树的数量
        root.left = helper(pre_start + 1, pre_start + left_num, in_start, mid - 1)
        root.right = helper(pre_start + left_num + 1, pre_end, mid + 1, in_end)
        return root
    }
    return helper(0, preorder.length - 1, 0, inorder.length - 1)
}
var preorder = [3, 9, 20, 15, 7],
    inorder = [9, 3, 15, 20, 7]
console.log(buildTree(preorder, inorder))