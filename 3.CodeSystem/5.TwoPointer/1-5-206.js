// 206. 反转链表
// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var reverseList = function (head) {
    if (!head || head.next) return head
    var tmp = null
    var pre = null
    var cur = head
    while (cur) {
        tmp = cur.next
        cur.next = pre
        pre = cur
        cur = tmp
    }
    return pre
}
var head = [1, 2, 3, 4, 5]
console.log(reverseList(head))