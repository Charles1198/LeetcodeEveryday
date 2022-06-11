/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let result = s.length;
    for (let i = 0; i <= s.length; i++) {
        result = Math.min(result, flipCount(s, i));
    }
    return result;
};

function flipCount(s, index) {
    const numberOf1 = s.substring(0, index).split('').filter(item => item === '1').length;
    const numberOf0 = s.substring(index, s.length).split('').filter(item => item === '0').length;
    return numberOf0 + numberOf1;
}

console.log(minFlipsMonoIncr("00011000"));

// 从第i个位置看，左边要翻转的是1，右边要翻转的是0，只要遍历s将左边的1和右边的0相加，和最小就是翻转次数
// 超时