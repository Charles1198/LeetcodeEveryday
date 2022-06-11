/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    // 使用前缀和算法，设数组第i项就是将s反转成 000...1...111(第一个1下标是i)需要翻转的次数
    const array = [];
    const numberOf0 = s.substring(0, s.length).split('').filter(item => item === '0').length;

    array.push(numberOf0);
    for (let i = 0; i < s.length; i++) {
        const str = s[i];
        if (str === '0') {
            // 第i个字符是0，那么相比i-1位置，少翻转一次
            array.push(array[array.length - 1] - 1);
        } else {
            array.push(array[array.length - 1] + 1);
        }
    }
    

    let result = s.length;
    for (let i = 0; i < array.length; i++) {
        result = Math.min(result, array[i]);
    }
    return result;
};

console.log(minFlipsMonoIncr("00011000"));

// 从第i个位置看，左边要翻转的是1，右边要翻转的是0，只要遍历s将左边的1和右边的0相加，和最小就是翻转次数
// 超时