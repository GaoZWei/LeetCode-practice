// 206. 反转链表
// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
//双指针(效率高)
var reverseList = function (head) {
    if (!head || !head.next) return head
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
};

//递归
var reverse = function (pre, head) {
    if (!head) return pre
    var tmp = head.next
    head.next = pre
    pre = head
    return reverse(pre, tmp)
}
var reverseList = function (head) {
    return reverse(null, head)
}
var head = [1, 2, 3, 4, 5]
console.log(reverseList(head))