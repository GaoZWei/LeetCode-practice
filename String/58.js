// 58. 最后一个单词的长度
var lengthOfLastWord = function (s) {
    var count = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] != " ") {
            while (i >= 0 && s[i] != " ") {
                i--
                count++
            }
            break
        }
    }
    return count
};
// split方法
// filter()方法会创建一个新数组，原数组的每个元素传入回调函数中，回调函数中有return返回值，
// 若返回值为true，这个元素保存到新数组中；若返回值为false，则该元素不保存到新数组中；原数组不发生改变。
var lengthOfLastWord = function (s) {
    var arr = s.split(" ").filter(item => item != "")
    return arr[arr.length - 1].length
}
//trim去掉首尾空格+split
var lengthOfLastWord = function (s) {
    let arr = s.trim().split(' ');
    return arr[arr.length - 1].length
}

var s = "a"
var s = "   fly me   to   the moon  "
// var s = "Hello World"
// var s = "luffy is still joyboy"
console.log(lengthOfLastWord(s))