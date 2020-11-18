// 寻找旋转排序数组中的最小值
// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] 
// 请找出其中最小的元素。

// 遍历
var findMin = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
            return nums[i];
        }
    }
    return nums[0];
}
// 二分查找
var findMin = function (nums) { //二分查找先控制left<right     再调整mid    再调整left/right 
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        if (nums[left] < nums[right]) {
            break;
        }
        let mid = ((left + right) / 2) >> 0;
        if (nums[mid] >= nums[left]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
};

nums = [4, 5, 6, 7, 0, 1, 2]
console.log(findMin(nums));