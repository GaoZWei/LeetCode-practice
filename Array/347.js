// 前 K 个高频元素
// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
const topKFrequent = (nums, k) => {
    //统计频次
    var freq = {}
    var numsArr = []
    for (var num of nums) {
        if (freq[num]) {
            freq[num]++
        } else {
            numsArr.push(num)
            freq[num] = 1
        }
    }

    var heap = []
    //交换
    var swap = (i, j) => {
        var t = heap[i]
        heap[i] = heap[j]
        heap[j] = t
    }

    //上浮
    var heapUp = (index) => {
        while (index > 0) {
            var parent = (index - 1) >>> 1 //父节点的位置
            if (freq[heap[parent]] > freq[heap[index]]) {
                swap(index, parent)
                index = parent
            } else {
                break
            }
        }
    }

    //下沉
    var heapDown = (index) => {
        while (2 * index + 1 < heap.length) {
            var children = 2 * index + 1
            //选子较小的比较
            if (children + 1 < heap.length && freq[heap[children + 1]] < freq[heap[children]]) {
                children++
            }
            if (freq(numsArr[index]) > freq[numsArr[children]]) {
                swap(index, children)
                index = children
            } else {
                break
            }
        }
    }


    //建堆
    for (var numItem of numsArr) {
        if (heap.length < k) {
            heap.push(numItem)
            heapUp(heap.length - 1)
        } else if (freq[numItem] > freq[heap[0]]) {
            heap[0] = numItem
            heapDown(0)
        }
    }

    return heap
};
var nums = [1, 1, 1, 2, 2, 3],
    k = 2

console.log(topKFrequent(nums, k))