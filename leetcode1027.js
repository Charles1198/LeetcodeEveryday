/**
 * @param {number[][]} points
 * @return {boolean}
 */
const isBoomerang = function(points) {
    const slope12 = slope(points[0], points[1]);
    const slope23 = slope(points[1], points[2]);
    if (slope12 === undefined || slope23 === undefined) {
        return false;
    }
    return slope12 !== slope23;
};
console.log(isBoomerang([[0,0],[1,1],[1,1]]));;


function slope(x, y) {
    if (x[0] === y[0] && x[1] === y[1]) {
        return undefined;
    }
    if (x[1] === y[1]) {
        return 0;
    }
    if (x[0] === y[0]) {
        return Number.MAX_VALUE;
    }
    return (x[1] - y[1]) / (x[0] - y[0])
}


