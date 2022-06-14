// 面试题 02.07. 链表相交
// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。

var getLinkLen = (head) => {
    var cur = head
    var count = 0
    while (cur) {
        cur = cur.next
        count++
    }
    return count
}

var getIntersectionNode = function (headA, headB) {
    var lenA = getLinkLen(headA)
    var lenB = getLinkLen(headB)
    var curA = headA
    var curB = headB
    if (lenA < lenB) {
        [curA, curB] = [curB, curA];
        [lenA, lenB] = [lenB, lenA];
    }
    var i = lenA - lenB
    while (i--) {
        curA = curA.next
    }
    while (curA && curA != curB) {
        curA = curA.next
        curB = curB.next
    }
    return curA
}