/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    // 排序
    nums.sort()

    // 排完序，最大距离就是最大减最小
    const maxLength = nums[nums.length - 1] - nums[0];

    // 用二分法，假设符合题意的数对距离是l，计算距离小于等于l的数对个数，用来做二分比较

};

/**
 * nums中距离小于等于l的数对个数
 * @param {*} nums 
 * @param {*} l 
 */
function getCount(nums, l) {
    let ans = 0;

    // 还用二分法
    for (let i = 0; i < nums.length - 1; i++) {
        // 计算从i位置到第一个距离i大于l的位置（或数组末尾）j，那么从i开始算的距离小于等于l的数对个数就是j-i
        ans += binarySearch(nums.slice(i), l);
    }
    return ans;
}
console.log(getCount([1,2,4,7], 2));

function binarySearch (arr, target) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((high - low) / 2) + low;
        const num = arr[mid];
        if (num === target) {
            return mid;
        } else if (num > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
}