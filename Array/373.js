// 373. 查找和最小的K对数字
// 给定两个以升序排列的整数数组 nums1 和 nums2 , 以及一个整数 k 。
// 定义一对值 (u,v)，其中第一个元素来自 nums1，第二个元素来自 nums2 。
// 请找到和最小的 k 个数对

// 暴力解法
var kSmallestPairs = function (nums1, nums2, k) {
    var m = nums1.length
    var n = nums2.length
    var res = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res.push([nums1[i], nums2[j]])
        }
    }
    return res.sort((a, b) => a[0] + a[1] - b[0] - b[1]).slice(0, k)
};


//heap解法(没完成)
var kSmallestPairs = function (nums1, nums2, k) {
    var m = nums1.length
    var n = nums2.length
    //初始化结果
    var res = []
    if (m == 0 || n == 0) return res
    //初始化heap
    var heap = []
    heap.push([nums1[0], nums2[0]])
    // 去重数组
    var x = new Array(m)
    for (let i = 0; i < n; i++) {
        x[i] = new Array(n).fill(false)
    }
    console.log(x)
    console.log(heap)
    //主逻辑
    while (k > 0 && !heap.length != 0) {
        heap.sort((a, b) => a[0])
    }
}

// 大顶堆(代码超时了)
// 1. 当堆内元素个数小于k的时候，则将新元素push到堆尾，执行堆尾元素的上浮操作
// 2. 当堆内元素的个数大于等于k时，则判读堆顶元素和与新元素比较，如果比堆顶元素小，则将堆顶元素替换成新元素，然后执行堆顶元素的下沉操作。否则不放进堆
var kSmallestPairs = function (nums1, nums2, k) {
    //截取前k个数字
    if (nums1.length > k) {
        nums1 = nums1.slice(0, k)
    }
    if (nums2.length > k) {
        nums2 = nums2.slice(0, k)
    }
    var heap = []
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (heap.length < k) {
                heap.push([nums1[i], nums2[j]])
                heapUp(heap, heap.length - 1)
            } else if (sum(heap[0]) >= (nums1[i] + nums2[j])) {
                heap[0] = [nums1[i], nums2[j]]
                heapDown(heap, 0)
            }
        }
    }
    return heap.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]))
}

var heapUp = (heap, i) => {
    var parent = (i - 1) / 2 | 0
    if (sum(heap[parent]) < sum(heap[i])) {
        swap(heap, i, parent)
        heapUp(heap, parent)
    }
}

var heapDown = (heap, i) => {
    var left = i * 2 + 1
    if (left >= heap.length) return
    if (left + 1 < heap.length && sum(heap[left]) <= sum(heap[left + 1])) {
        left++
    }
    if (sum(heap[left]) >= sum(heap[i])) {
        swap(heap, i, left)
        heapDown(heap, left)
    }
}
var sum = (arr) => {
    return arr[0] + arr[1]
}
var swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

var nums1 = [1, 7, 11],
    nums2 = [2, 4, 6],
    k = 3

var nums1 = [1, 1, 2],
    nums2 = [1, 2, 3],
    k = 2
console.log(kSmallestPairs(nums1, nums2, k))