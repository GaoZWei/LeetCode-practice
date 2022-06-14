// 19. 删除链表的倒数第 N 个结点
// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var removeNthFromEnd = function (head, n) {
    var res = new ListNode(0, null)
    var fast = res
    var slow = res
    while (n--) {
        fast = fast.next
    }
    if (!fast) return res.next
    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return res.next
}
var head = [1, 2, 3, 4, 5],
    n = 2
console.log(removeNthFromEnd(head, n))