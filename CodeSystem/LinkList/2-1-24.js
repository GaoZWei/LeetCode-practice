// 24. 两两交换链表中的节点
// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
function ListNode(val, next) {
     this.val = (val === undefined ? 0 : val)
     this.next = (next === undefined ? null : next)
 }
 //链表操作,先连接后指针,再连接前指针 (从后往前)
 var swapPairs = function (head) {
     var ret = new ListNode(0, head)
     var tmp = ret
     while (tmp.next && tmp.next.next) {
         var cur = tmp.next.next
         var pre = tmp.next
         pre.next = cur.next
         cur.next = pre
         tmp.next = cur
         tmp = pre
     }
     return ret.next
 };
 var head = [1, 2, 3, 4]
 console.log(swapPairs(head))