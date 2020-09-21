// 无重复字符的最长子串
//way1:辅助空间1个数组,存入+删除操作  (滑动窗口)
var lengthOfLongestSubstring = function(s) {
    var arr=[];
    var max=0;
    for (var i=0;i<s.length;i++){
        var index=arr.indexOf(s[i])
        if(index!==-1){
            arr.splice(0,index+1)//把匹配的加上前面的一起干掉  da bca  干掉da    splice(0,5)删除从0开始,5个元素
        }
        arr.push(s[i])        //把下标为i的值放入arr
        max=Math.max(arr.length,max)
    }
    return max
};

//way2 数组下标进行滑动窗口  匹配上,滑动窗口就往后移动,用j-i+1为长度
// 整体思路:截取i到j-1的字符串,判断是否存在和j相同,匹配则把i赋值为匹配上的后一位,每一轮循环判断max
var lengthOfLongestSubstring = function(s) {
    let index = 0, max = 0
    for(let i = 0, j = 0; j < s.length; j++) {
        index = s.substring(i, j).indexOf(s[j])   //substring(i,j)获取两个下标里面的字符串  i到j-1字符
        if(index !== -1) { 
            i = i + index + 1   //能匹配上,让滑动窗口的i到匹配上的那个数后面abasdad=>滑动窗口开始到a!!!
        } 
        max = Math.max(max, j - i + 1) 
    }
    return max
};
//滑动窗口对应
// j取值  a   b   a   s   d   a   d   b   b
// index -1  -1  0   -1  -1  1   1   -1  2
// i取值  0   0   1   1   1   3   5   5   8

var s="abasdadbb";
console.log(lengthOfLongestSubstring(s))