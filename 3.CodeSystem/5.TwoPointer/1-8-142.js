// 142. 环形链表 II
// 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var detectCycle = function (head) {
    if (!head || !head.next) return null
    var slow = head.next
    var fast = head.next.next
    while (fast != slow && fast.next && fast) {
        slow = slow.next
        fast = fast.next.next
    }
    if (!fast || !fast.next) return null
    var slow = head
    while (fast != slow) {
        fast = fast.next
        slow = slow.next
    }
    return slow
}
var head = [3, 2, 0, -4],
    pos = 1
console.log(detectCycle(head))