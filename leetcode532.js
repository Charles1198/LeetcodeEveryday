/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let ans = 0;
    if (k === 0) {
        ans = findPairsOf0(nums);
    } else {
        ans = findPairsNot0(nums, k);
    }
    return ans;
};

var findPairsOf0 = function(nums) {
    nums.sort();
    const set = new Set();
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] === nums[i]) {
            set.add(nums[i - 1]);
        }
    }
    return set.size;
};

var findPairsNot0 = function(nums, k) {
    let ans = 0;
    const newNums = Array.from(new Set(nums));
    for (let i = 0; i < newNums.length; i++) {
        if (newNums.includes(newNums[i] + k)) {
            ans++;
        }
    }
    return ans;
};

console.log(findPairs([3, 1, 4, 1, 5], 0));