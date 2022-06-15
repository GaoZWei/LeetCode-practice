//链表的实现
// https://www.bilibili.com/video/BV1P5411H77a?p=3&spm_id_from=pageDriver&vd_source=87cec1c19ad46d006e64c899fbaae750
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}
class LinkList {
    constructor() {
        this.size = 0
        this.head = null
    }
    //尾部添加
    append(element) {
        let node = new Node(element)
        if (this.head == null) {
            this.head = node
        } else {
            let current = this.getNode(this.size - 1)
            current.next = node
        }
        this.size++
    }
    //某处插入
    appendAt(position, element) {
        if (position < 0 || position > this.size) {
            throw new Error('position out range')
        }
        let node = new Node(element)
        if (position == 0) {
            node.next = this.head
            this.head = node
        } else {
            let pre = this.getNode(position - 1)
            node.next = pre.next
            pre.next = node
        }
        this.size++
    }
    //删除指定位置的元素
    removeAt(position) {
        if (position < 0 || position >= this.size) {
            throw new Error('position out range')
        }
        let current = this.head
        if (position == 0) {
            this.head = current.next
        } else {
            let pre = this.getNode(position - 1)
            let cur = pre.next
            pre.next = cur.next
        }
        this.size--
    }

    //查找指定元素的索引
    indexOf(element) {
        let current = this.head
        for (let i = 0; i < this.size; i++) {
            if (current.element === element) {
                return i
            }
            current = current.next
        }
        return -1
    }

    getNode(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('out range')
        }
        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current
    }
}


var ll = new LinkList()
ll.append(1)
ll.append(2)
// ll.append(3)
// ll.append(4)
ll.appendAt(2, 3)
ll.appendAt(3, 4)
// ll.appendAt(3, 2)
ll.removeAt(1)
// console.log(ll);
console.dir(ll, {
    depth: 100
});
console.log(ll.indexOf(1));