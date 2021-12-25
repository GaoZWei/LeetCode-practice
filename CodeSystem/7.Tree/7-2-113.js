// 113. 路径总和 II
// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，
// 找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

//递归
var pathSum = function (root, targetSum) {
    var res = []
    var dfs = (node, tmp, count) => {
        if (count == 0 && !node.left && !node.right) {
            res.push(tmp.slice())
            return;
        }
        if (!node.left && !node.right) return;
        if (node.left) {
            tmp.push(node.left.val)
            dfs(node.left, tmp, count - node.left.val)
            tmp.pop()
        }
        if (node.right) {
            tmp.push(node.right.val)
            dfs(node.right, tmp, count - node.right.val)
            tmp.pop()
        }
    }
    dfs(root, [root.val], targetSum - root.val)
    return res
}

//迭代
var pathSum = function (root, targetSum) {
    if (root == null) return []
    var nodeArr = [root]
    var valArr = [0]
    var tmpArr = [
        []
    ]
    var res = []
    while (nodeArr.length) {
        var curNode = nodeArr.shift()
        var curVal = valArr.shift()
        var tmp = tmpArr.shift()
        curVal += curNode.val
        tmp.push(curNode.val)
        if (curVal == targetSum && !curNode.left && !curNode.right) {
            res.push(tmp)
        }
        if (curNode.left) {
            nodeArr.push(curNode.left)
            valArr.push(curVal)
            tmpArr.push([...tmp])
        }
        if (curNode.right) {
            nodeArr.push(curNode.right)
            valArr.push(curVal)
            tmpArr.push([...tmp])
        }
    }
    return res
}