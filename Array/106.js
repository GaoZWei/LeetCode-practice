// 从中序与后序遍历序列构造二叉树

// 根据一棵树的中序遍历与后序遍历构造二叉树。
// 注意:
// 你可以假设树中没有重复的元素。
// 中序遍历 inorder = [9,3,15,20,7]
// 后序遍历 postorder = [9,15,7,20,3]

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var buildTree = function (inorder, postorder) {
    const map = new Map() //空间换时间
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i)
    }
    const helper = (in_start, in_end, post_start, post_end) => {
        if (in_start > in_end || post_start > post_end) {
            return null
        }
        const rootVal = postorder[post_end]
        var root = new TreeNode(rootVal) //每次这个root值都更新
        var mid = map.get(rootVal)
        var left_num = mid - in_start
        //每次这个mid值都更新
        root.left = helper(in_start, mid - 1, post_start, post_start + left_num - 1)
        root.right = helper(mid + 1, in_end, post_start + left_num, post_end - 1)
        return root
    }
    return helper(0, inorder.length - 1, 0, postorder.length - 1)
};
var inorder = [9, 3, 15, 20, 7]
postorder = [9, 15, 7, 20, 3]
console.log(buildTree(inorder, postorder))