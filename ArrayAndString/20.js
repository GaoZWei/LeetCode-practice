// 反转字符串中的单词 III
// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
// 输入："Let's take LeetCode contest"
// 输出："s'teL ekat edoCteeL tsetnoc"
// 在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

// var reverseWords = function (s) {
//     const ret = [];
//     const length = s.length;
//     let i = 0;
//     while (i < length) {
//         let start = i;
//         while (i < length && s.charAt(i) != ' ') { //找每次的单词的起止位置
//             i++;
//         }
//         console.log(i)
//         for (let p = start; p < i; p++) {
//             ret.push(s.charAt(start + i - 1 - p)); //从后向前遍历
//         }
//         console.log(ret)
//         while (i < length && s.charAt(i) == ' ') { //push空格
//             i++;
//             ret.push(' ');
//         }
//     }
//     // return ret
//     return ret.join(''); //数组中的字符放到一个字符串
// };


//方法一
var reverseWords = function (s) {
    const ret = []
    const arr_length = s.length
    let i = 0
    while (i < arr_length) {
        let start = i
        while (i < arr_length && s[i] != " ") { //找每次的单词的起止位置
            i++
        }
        for (let p = start; p < i; p++) { //从后向前遍历
            ret.push(s.charAt(start + i - 1 - p))
        }
        while (i < arr_length && s[i] == " ") { //push空格
            i++;
            ret.push(" ")
        }
    }
    return ret.join("")
};
//方法二
var reverseWords = function (s) {
    //分割出每个单词,返回数组      每个单词中的每个字母分割,返回数组       反转连在一起
    return s.split(" ").map(element => element.split('').reverse().join('')).join(' ')
};

var s = "Let's take LeetCode contest"
console.log(reverseWords(s))