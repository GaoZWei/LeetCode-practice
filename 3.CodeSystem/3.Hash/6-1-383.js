// 383. 赎金信
// 给你一个赎金信 (ransomNote) 字符串和一个杂志(magazine)字符串，判断 ransomNote 能不能由 magazines 里面的字符构成。
// 如果可以构成，返回 true ；否则返回 false 。

var canConstruct = function (ransomNote, magazine) {
    var array = new Array(26).fill(0)
    var base = "a".charCodeAt()
    for (let i = 0; i < magazine.length; i++) {
        array[magazine[i].charCodeAt() - base]++
    }
    for (let j = 0; j < ransomNote.length; j++) {
        if (!array[ransomNote[j].charCodeAt() - base]) {
            return false
        } else {
            array[ransomNote[j].charCodeAt() - base]--
        }
    }
    return true
};

var ransomNote = "a",
    magazine = "b"
var ransomNote = "aa",
    magazine = "aab"
console.log(canConstruct(ransomNote, magazine))