//暴力破解法,和值匹配
var twoSum = function (nums, target) {
    if (nums.length < 2) return -1;//判断数组长度是否满足基本条件
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {//和为目标值则匹配成功
                return [i, j]
            }
        }
    }
    return -1;
};

//暴力破解法,求差值匹配
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        var diff = target - nums[i]
        for (let j = i + 1; j < nums.length; j++) { //j从i之后加1，就不会重复同一个元素
            if (nums[j] === diff) {
                return [i, j]
            }
        }
    }
};

//空间换时间 way1  (对象)   键值对存储
const twoSum = (nums, target) => {
    const prevNums = {}; // 存储出现过的数字，和对应的索引               

    for (let i = 0; i < nums.length; i++) { // 遍历元素   
        const curNum = nums[i]; // 当前元素   
        const targetNum = target - curNum; // 满足要求的目标元素  
        const targetNumIndex = prevNums[targetNum]; // 在prevNums中获取目标元素的索引
        if (targetNumIndex !== undefined) { // 如果存在，直接返回 [目标元素的索引,当前索引]
            return [targetNumIndex, i];
        } else { // 如果不存在，说明之前没出现过目标元素
            prevNums[curNum] = i; // 存入当前的元素和对应的索引
        }
    }
}

// 空间换时间 way2 (Hash)  按hash表存储
const twoSum = (nums, target) => {
    // 1. 构造哈希表
    const map = new Map(); // 存储方式 {need, index}

    // 2. 遍历数组
    for (let i = 0; i < nums.length; i++) {
        // 2.1 如果找到 target - nums[i] 的值
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i];
        } else {
            // 2.2 如果没找到则进行设置
            map.set(target - nums[i], i);//把i需要的那个数的hash表的位置填上i =>对应上面get(nums[i])
        }
    }
};

var numbers = [2, 3, 4, 5]
console.log(twoSum(numbers, 6))