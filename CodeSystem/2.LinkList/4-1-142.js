// 142. 环形链表 II
// 给定一个链表， 返回链表开始入环的第一个节点。 如果链表无环， 则返回 null。
function ListNode(val) {
    this.val = val;
    this.next = null;
}
//快慢指针
//先判断是否有环形链表
var detectCycle = function (head) {
    if (!head || !head.next) return null
    var slow = head.next
    var fast = head.next.next
    while (fast && fast.next && fast != slow) {
        slow = slow.next
        fast = fast.next.next
    }
    if (!fast || !fast.next) return null
    var slow = head
    while (fast != slow) {
        slow = slow.next
        fast = fast.next
    }
    return slow
};

var detectCycle = function (head) {
    if (!head || !head.next) return null
    var slow = head.next,
        fast = head.next.next
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (fast == slow) {
            var slow = head
            while (fast != slow) {
                fast = fast.next
                slow = slow.next
            }
            return slow
        }
    }
    return null
}
var head = [3, 2, 0, -4]
console.log(detectCycle(head))