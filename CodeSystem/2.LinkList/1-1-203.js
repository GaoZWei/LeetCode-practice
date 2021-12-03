// 203. 移除链表元素
// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

//方法一
var removeElements = function (head, val) {
    var ret = new ListNode(0, head) //0虚拟头结点
    var cur = ret
    while (cur.next) {
        if (cur.next.val == val) {
            cur.next = cur.next.next
            continue
        }
        cur = cur.next
    }
    return ret.next
};

//方法二
var removeElements = function (head, val) {
    if (head === null) { //递归终止 遍历完了链表
        return head;
    }
    head.next = removeElements(head.next, val); //递归调用函数removeElements
    return head.val === val ? head.next : head; //如果当前元素值是val，则返回下一个元素，否则直接返回当前元素
};

var head = [1, 2, 6, 3, 4, 5, 6],
    val = 6
console.log(removeElements(head, val)) //[1,2,3,4,5]