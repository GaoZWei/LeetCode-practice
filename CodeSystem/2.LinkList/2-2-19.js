// 19. 删除链表的倒数第 N 个结点

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// 双指针
var removeNthFromEnd = function (head, n) {
    var res = new ListNode(0, head)
    var fast = res,
        slow = res
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