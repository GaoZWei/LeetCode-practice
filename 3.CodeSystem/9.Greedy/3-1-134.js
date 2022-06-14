// 134. 加油站
// 在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。
// 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。
// 给定两个整数数组 gas 和 cost ，如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。

//贪心(主要的)
// curSum标识区间内正负  curSum<0  更新start=i+1和curSum=0
// totalSum记录总的正负 totalSum<0 返回-1
var canCompleteCircuit = function (gas, cost) {
    var curSum = 0
    var totalSum = 0
    var start = 0
    for (let i = 0; i < gas.length; i++) {
        curSum += gas[i] - cost[i]
        totalSum += gas[i] - cost[i]
        if (curSum < 0) {
            curSum = 0
            start = i + 1
        }
    }
    if (totalSum < 0) return -1
    return start
};
//其他方法
// 三种判断:
//1. total<0  返回-1
//2. min>=0 没遇见负的 返回0
//3. min<0 反向遍历,填充为>=0时,返回i
var canCompleteCircuit = function (gas, cost) {
    var min = Infinity
    var total = 0
    for (let i = 0; i < gas.length; i++) {
        total += gas[i] - cost[i]
        if (total < min) {
            min = total
        }
    }
    if (total < 0) return -1
    if (min >= 0) return 0
    for (let i = gas.length - 1; i >= 0; i--) {
        min += gas[i] - cost[i]
        if (min >= 0) {
            return i
        }
    }
    return -1
}
var gas = [1, 2, 3, 4, 5],
    cost = [3, 4, 5, 1, 2]
console.log(canCompleteCircuit(gas, cost));