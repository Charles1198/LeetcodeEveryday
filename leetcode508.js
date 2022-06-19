/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var findFrequentTreeSum = function(root) {
    const map = new Map();
    sumOfTree(root, map);
    const sums = Array.from(map.values());
    sums.sort();
    const maxValue = sums[sums.length - 1];
    const result = [];
    for (const [key, value] of map) {
        if (value === maxValue) {
            result.push(key)
        }
    }
    return result;
};

function sumOfTree(root, map) {
    // 去掉注释更简洁，加上注释更快捷
    // if (!root.left && !root.right) {
    //     map.set(root.val, map.get(root.val) ? map.get(root.val) + 1 : 1);
    //     return root.val;
    // }
    const leftSum = root.left ? sumOfTree(root.left, map) : 0;
    const rightSum = root.right ? sumOfTree(root.right, map) : 0;
    const sum = leftSum + rightSum + root.val;
     
    map.set(sum, map.get(sum) ? map.get(sum) + 1 : 1);
    return sum;
}