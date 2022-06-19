/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    const temp = arr.join('').replaceAll('0', '00').split('').slice(0, arr.length);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = temp[i];
    }
};

var duplicateZeros2 = function(arr) {
    const n = arr.length;
    let i = 0;
    let j = 0;
    while (j < n - 1) {
        if (arr[i] === 0) {
            j++;
        }
        i++;
        j++;
    }
    while (j > i) {
        if (arr[i] === 0) {
            j--;
            arr[j] = 0;
        }
        i--;
        j--;
    }
    console.log(arr);
};
duplicateZeros2([1,0,2,3,0,4,5,0])