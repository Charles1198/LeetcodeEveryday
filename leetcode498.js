/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const Y = mat.length;
    const X = mat[0].length;

    let dir = 1;
    const result = [];
    let x = 0;
    let y = 0;
    while (result.length < Y * X) {
        result.push(mat[y][x]);

        // dir=1:向右上方遍历；dir=-1:向左下方遍历
        x+=dir;
        y-=dir;

        if (x >= X) {
            x = X - 1;
            y = y + 2;
            dir = -1;
        } else if (y < 0) {
            y = 0;
            dir = -1;
        } else if (y >= Y) {
            y = Y - 1;
            x = x + 2;
            dir = 1;
        } else if (x < 0) {
            x = 0;
            dir = 1;
        }
    }
    return result;
};
console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]));