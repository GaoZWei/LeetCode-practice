// 前 K 个高频元素
// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

//小根堆  优先队列
const topKFrequent = (nums, k) => {
    var freq = {}
    var numArr = []
    for (let i = 0; i < nums.length; i++) {
        if (freq[nums[i]]) {
            freq[nums[i]]++
        } else {
            freq[nums[i]] = 1
            numArr.push(nums[i])
        }
    }

    var heap = []

    var swap = (i, j) => {
        [heap[i], heap[j]] = [heap[j], heap[i]]
    }

    var heapUp = (index) => {
        while (index > 0) {
            var parent = (index - 1) >>> 1
            if (freq[heap[parent]] > freq[heap[index]]) {
                swap(parent, index)
                index = parent
            } else {
                break
            }
        }
    }
    var heapDown = (index) => {
        while (index * 2 + 1 < heap.length) {
            var children = index * 2 + 1
            if (children + 1 < heap.length && freq[heap[children + 1]] < freq[heap[children]]) {
                children++
            }
            if (freq[heap[index]] > freq[heap[children]]) {
                swap(index, children)
                index = children
            } else {
                break
            }
        }
    }
    for (let numItem of numArr) {
        if (heap.length < k) { //堆不满
            heap.push(numItem)
            heapUp(heap.length - 1)
        } else if (freq[numItem] > freq[heap[0]]) { //当前值的数量>堆顶值的数量
            heap[0] = numItem
            heapDown(0)
        }
    }

    return heap
};
var nums = [1, 1, 1, 2, 2, 3],
    k = 2

console.log(topKFrequent(nums, k))