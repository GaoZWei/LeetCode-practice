// 450. 删除二叉搜索树中的节点
// 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，
// 并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

//递归
var deleteNode = function (root, key) {
    if (root == null) return root
    if (root.val == key) {
        if (!root.left) return root.right
        if (!root.right) return root.left
        var cur = root.right
        while (cur.left) {
            cur = cur.left
        }
        cur.left = root.left
        root = root.right
        return root
    } else if (root.val > key) {
        root.left = deleteNode(root.left, key)
    } else {
        root.right = deleteNode(root.right, key)
    }
    return root
};

//迭代(不好理解)
var deleteNode = function (root, key) {
    var deleteOneNode = (target) => {
        if (!target) return target
        if (!target.right) return target.left
        var cur = target.right
        while (cur.left) {
            cur = cur.left
        }
        cur.left = target.left
        return target.right
    }
    if (root == null) return root
    var pre = null
    var cur = root
    while (cur) {
        if (cur.val == key) break
        pre = cur
        cur.val > key ? cur = cur.left : cur = cur.right
    }
    if (!pre) return deleteOneNode(cur)
    if (pre.left && pre.left.val == key) {
        pre.left = deleteOneNode(cur)
    }
    if (pre.right && pre.right.val == key) {
        pre.right = deleteOneNode(cur)
    }
    return root
};