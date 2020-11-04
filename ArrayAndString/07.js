//最长公共前缀
// 输入: ["flower","flow","flight"]
// 输出: "fl"

var longestCommonPrefix = function (strs) {
    if (strs.length == 0) {
        return ""
    }
    var tmp = strs[0] //取第一个元素
    for (let i = 1; i < strs.length; i++) { //从第二个开始遍历
        let j = 0; //j后面需要,提出来
        for (; j < tmp.length && j < strs[i].length; j++) {
            if (tmp[j] != strs[i][j]) { //对应字母不匹配break
                break;
            }
        }
        tmp = tmp.substr(0, j) //取出字符串
        if (tmp == "") {
            return tmp
        }
    }
    return tmp
};


// var longestCommonPrefix = function (strs) {
//     if (strs.length == 0)
//         return "";
//     let ans = strs[0];
//     for (let i = 1; i < strs.length; i++) {
//         let j = 0;
//         for (; j < ans.length && j < strs[i].length; j++) {
//             if (ans[j] != strs[i][j])
//                 break;
//         }
//         ans = ans.substr(0, j);
//         if (ans === "")
//             return ans;
//     }
//     return ans;
// };

var strs = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(strs))