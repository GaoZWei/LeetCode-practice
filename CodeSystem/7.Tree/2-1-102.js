// 102. 二叉树的层序遍历

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


var levelOrder = function (root) {
    var res = []
    var queue = []
    if (root == null) return res
    queue.push(root)

    while (queue.length != 0) {
        var curLen = queue.length
        var curArr = []
        for (let i = 0; i < curLen; i++) {
            var node = queue.shift()
            curArr.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(curArr)
    }
    return res
};

// 二叉树：[3,9,20,null,null,15,7]