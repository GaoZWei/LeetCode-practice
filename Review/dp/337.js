// 337. 打家劫舍 III (递归+动态规划)
// 在上次打劫完一条街道之后和一圈房屋后，小偷又发现了一个新的可行窃的地区。
// 这个地区只有一个入口，我们称之为“根”。 除了“根”之外，每栋房子有且只有一个“父“房子与之相连。
// 一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。
// 计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//递归
var rob = function (root) {
    if (root == null) return 0
    var includeRoot = root.val
    if (root.left) {
        includeRoot += rob(root.left.left) + rob(root.left.right)
    }
    if (root.right) {
        includeRoot += rob(root.right.left) + rob(root.right.right)
    }
    var excludeRoot = rob(root.left) + rob(root.right)

    return Math.max(includeRoot, excludeRoot)
};

//记忆化递归
var rob = (root) => {
    var memory = new Map()
    var helper = (root) => {
        if (root == null) return 0
        if (memory.has(root)) return memory.get(root)
        var includeRoot = root.val
        if (root.left) {
            includeRoot += helper(root.left.left) + helper(root.left.right)
        }
        if (root.right) {
            includeRoot += helper(root.right.left) + helper(root.right.right)
        }
        var excludeRoot = helper(root.left) + helper(root.right)
        var res = Math.max(includeRoot, excludeRoot)
        memory.set(root, res)
        return res
    }
    return helper(root)
};

//dp
var rob = (root) => {
    var helper = (root) => {
        if (root == null) return [0, 0]
        var left = helper(root.left)
        var right = helper(root.right)
        var excludeRoot = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
        var includeRoot = root.val + left[0] + right[0]
        return [excludeRoot, includeRoot]
    }
    var res = helper(root)
    return Math.max(...res)
}

var root = [3, 2, 3, null, 3, null, 1]
console.log(rob(root))