// 加油站
// 在一条环路上有 N 个加油站， 其中第 i 个加油站有汽油 gas[i] 升。
// 你有一辆油箱容量无限的的汽车， 从第 i 个加油站开往第 i + 1 个加油站需要消耗汽油 cost[i] 升。 你从其中的一个加油站出发， 开始时油箱为空。
// 如果你可以绕环路行驶一周， 则返回出发时加油站的编号， 否则返回 - 1。
// 输入: 
// gas  = [1,2,3,4,5]
// cost = [3,4,5,1,2]
// 输出: 3

// 思路1:
// 1.left累加后小于0,从出发点到i都不是起点
// 2.sum(gas)>sum(cost) 一定有解

// 只需遍历一遍,到哪不满足,之前的都不能作为起点,再往后找!!!
var canCompleteCircuit = function (gas, cost) {
    var left = 0
    var start = 0
    var gasTotal = 0
    var costTotal = 0
    for (let i = 0; i < gas.length; i++) {
        gasTotal += gas[i]
        costTotal += cost[i]
        left += (gas[i] - cost[i])
        if (left < 0) {
            start = i + 1
            left = 0
        }
    }
    if (gasTotal < costTotal) {
        return -1
    }
    return start
};


// 思路2:
// 暴力破解
// 直接concat,用isStart标识外侧是否是起始点
var canCompleteCircuit = function (gas, cost) {
    var n = gas.length
    gas = gas.concat(gas)
    cost = cost.concat(cost)
    for (let i = 0; i < n; i++) {
        var left = 0
        var isStart = true
        for (let j = i; j < i + n; j++) { //内层循环扫一个gas长度,看看每一步left是否小于0
            left += gas[j] - cost[j]
            if (left < 0) {
                isStart = false
                break
            }
        }
        if (isStart) {
            return i
        }
    }
    return -1
}

var gas = [1, 2, 3, 4, 5]
var cost = [3, 4, 5, 1, 2]
console.log(canCompleteCircuit(gas, cost))