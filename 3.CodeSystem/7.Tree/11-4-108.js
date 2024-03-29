// 108. 将有序数组转换为二叉搜索树
// 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。
// 高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。

//递归
var sortedArrayToBST = function (nums) {
    var buildTree = (arr, left, right) => {
        if (left > right) return null
        
        var mid = Math.floor(left + (right - left) / 2)

        var root = new TreeNode(arr[mid])
        root.left = buildTree(arr, left, mid - 1)
        root.right = buildTree(arr, mid + 1, right)

        return root
    }
    return buildTree(nums, 0, nums.length - 1)
};