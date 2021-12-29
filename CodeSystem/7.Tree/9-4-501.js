// 501. 二叉搜索树中的众数
// 给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。

//map实现
var findMode = function (root) {
    var map = new Map()
    var preOrder = (node) => {
        if (node == null) return null
        if (map.get(node.val)) {
            map.set(node.val, map.get(node.val) + 1)
        } else {
            map.set(node.val, 1)
        }
        preOrder(node.left)
        preOrder(node.right)
    }
    preOrder(root)
    var maxNum = 0
    for (let [key, val] of map) {
        maxNum = Math.max(maxNum, val)
    }
    var res = []
    for (let [key, val] of map) {
        if (val == maxNum) {
            res.push(key)
        }
    }
    return res
};

//递归中count判断
var findMode = function (root) {
    var res = []
    var pre = root
    var count = 0
    var maxCount = 1

    var inOrder = (cur) => {
        if (cur == null) return

        inOrder(cur.left)

        if (pre.val == cur.val) {
            count++
        } else {
            count = 1
        }
        if (count == maxCount) {
            res.push(cur.val)
        }
        if (count > maxCount) {
            maxCount = count
            res = []
            res.push(cur.val)
        }
        
        inOrder(cur.right)
    }
    inOrder(root)
    return res
}