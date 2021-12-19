// 116. 填充每个节点的下一个右侧节点指针  (满二叉树)
// 117. 填充每个节点的下一个右侧节点指针2  (二叉树)

// 从左向右填充next指针
var connect = function (root) {
    if (root == null) return root
    var queue = [root]
    while (queue.length) {
        var len = queue.length
        for (let i = 0; i < len; i++) {
            var node = queue.shift()
            if (i < len - 1) {
                node.next = queue[0] //填充next指针
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return root
};