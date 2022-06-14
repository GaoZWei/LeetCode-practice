// 654. 最大二叉树
// 给定一个不含重复元素的整数数组 nums 。一个以此数组直接递归构建的 最大二叉树 定义如下：

// 二叉树的根是数组 nums 中的最大元素。
// 左子树是通过数组中 最大值左边部分 递归构造出的最大二叉树。
// 右子树是通过数组中 最大值右边部分 递归构造出的最大二叉树。
// 返回有给定数组 nums 构建的 最大二叉树

var constructMaximumBinaryTree = function (nums) {
    if (!nums.length) return null
    var rootVal = Math.max(...nums)
    var rootIndex = nums.indexOf(rootVal)
    var root = new TreeNode(rootVal)
    root.left = constructMaximumBinaryTree(nums.slice(0, rootIndex))
    root.right = constructMaximumBinaryTree(nums.slice(rootIndex + 1))
    return root
};