// 每个矩形的权重等于矩形包含的点数
const weightOfRect = function name(rect) {
    const w = rect[2] - rect[0];
    const h = rect[3] - rect[1];
    return (w + 1) * (h + 1);
}


/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
    this.perfixSumArray = [0];
    this.rects = rects;
    // 构造前缀和数组
    this.rects.forEach(rect => {
        this.perfixSumArray.push(weightOfRect(rect) + this.perfixSumArray[this.perfixSumArray.length - 1]);
    })
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
    // 前缀和数组最后一个数字就是矩形总权重，在其中随机选一个数字
    const totalWeight = this.perfixSumArray[this.perfixSumArray.length - 1];
    const randomNumber = Math.ceil(Math.random() * totalWeight);

    // 二分法这个数字位于前缀和数组中第index项就选第index个矩形
    const index = binarySearch(this.perfixSumArray, randomNumber) - 1;

    // 找到第index个矩形
    const rect = this.rects[index];
    // 矩形的宽
    const rectW = rect[2] - rect[0] + 1;
    // 找到第index个矩形中第k个点
    const k = randomNumber - this.perfixSumArray[index];
    // 第k个点位于第几行
    const row = Math.floor(k / rectW);
    // 第k个点位于第几列
    const clo = k % rectW;

    return [rect[0] + clo, rect[1] + row];
};

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