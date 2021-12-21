// 100. 相同的树
// 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

//递归
var isSameTree = function (p, q) {
    if (p == null && q == null) return true
    if (p == null || q == null || p.val != q.val) return false
    var left = isSameTree(p.left, q.left)
    var right = isSameTree(p.right, q.right)
    return left && right
};


//队列
var isSameTree = function (p, q) {
    if (p == null && q == null) return true
    var queue1 = []
    var queue2 = []
    queue1.push(p)
    queue2.push(q)
    while (queue1.length && queue2.length) {
        var p1 = queue1.shift()
        var q1 = queue2.shift()
        if (p1 == null && q1 == null) continue
        if (q1 == null || p1 == null || p1.val != q1.val) return false
        queue1.push(p1.left)
        queue1.push(p1.right)
        queue2.push(q1.left)
        queue2.push(q1.right)
    }
    return true
};