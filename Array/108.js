// 将有序数组转换为二叉搜索树

// 给你一个整数数组 nums， 其中元素已经按 升序 排列， 请你将其转换为一棵 高度平衡 二叉搜索树。
// 高度平衡 二叉树是一棵满足「 每个节点的左右两个子树的高度差的绝对值不超过 1」 的二叉树。


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
// 思路:
// 1.找根节点
// 2.根的左边一个区间,根的右边一个区间
// 3.递归就可以
var sortedArrayToBST = function (nums) {
    var left = 0;
    var right = nums.length - 1
    const tree = (nums, left, right) => {
        if (left > right) { // 构成不了区间，返回null
            return null;
        }
        var mid = parseInt((left + right) / 2)
        var rootVal = nums[mid]
        var root = new TreeNode(rootVal)
        root.left = tree(nums, left, mid - 1);
        root.right = tree(nums, mid + 1, right);
        return root
    }
    return tree(nums, left, right)
};
var nums = [-10, -3, 0, 5, 9]
console.log(sortedArrayToBST(nums))