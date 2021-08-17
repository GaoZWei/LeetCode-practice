// 数组中的第K个最大元素
// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5

// 思路1:堆排序 => 大根堆
// 构建大根堆 调整
// 下沉
// 交换
var findKthLargest = function (nums, k) {
    var heapSize = nums.length
    //构建大顶堆
    buildMaxHeap(nums, heapSize)
    //下沉
    for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
        swap(nums, 0, i)
        heapSize--
        modifyHeap(nums, 0, heapSize)
    }
    return nums[0]
};

//自下而上构建大根堆
var buildMaxHeap = (nums, heapSize) => {
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) { //i为第一个非叶子节点
        modifyHeap(nums, i, heapSize)
    }
}

//从左到右,从上向下调整
var modifyHeap = (nums, i, heapSize) => {
    var left = i * 2 + 1
    var right = i * 2 + 2
    var largest = i
    if (left < heapSize && nums[left] > nums[largest]) {
        largest = left
    }
    if (right < heapSize && nums[right] > nums[largest]) {
        largest = right
    }
    if (largest != i) {
        swap(nums, i, largest)
        //继续调整下面的叶子节点
        modifyHeap(nums, largest, heapSize)
    }
}

//交换
var swap = (a, i, j) => {
    var tmp = a[i]
    a[i] = a[j]
    a[j] = tmp
}

var nums = [3, 2, 1, 5, 6, 4]
var k = 2
console.log(findKthLargest(nums, k))