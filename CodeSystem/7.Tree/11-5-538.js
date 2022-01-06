// 538. 把二叉搜索树转换为累加树
// 给出二叉 搜索 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），
// 使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。

//递归
var convertBST = function (root) {
    var pre = 0
    var reverseInOrder = (cur) => {
        if (cur) {
            reverseInOrder(cur.right)
            cur.val += pre
            pre = cur.val
            reverseInOrder(cur.left)
        }
    }
    reverseInOrder(root)
    return root
};

//迭代
var convertBST = function (root) {
    var stack = []
    var pre = 0
    var cur = root
    while (cur != null || stack.length) {
        while (cur != null) {
            stack.push(cur)
            cur = cur.right
        }
        cur = stack.pop()
        cur.val += pre
        pre = cur.val
        cur = cur.left
    }
return root
}