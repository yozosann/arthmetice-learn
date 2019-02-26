/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function (height) {
//     let maxArea = 0;
//     for (i = 0; i < height.length; i++) {
//         for(let j = i + 1; j < height.length; j ++) {
//             maxArea = Math.max(maxArea,  Math.min(height[i], height[j]) * (j - i));
//         }
//     }
//     console.log(maxArea);
//     return maxArea;
// };

var maxArea = function (height) {
    let maxArea = 0, j = height.length - 1, i = 0;
    while(i < j) {
        maxArea = Math.max(maxArea,  Math.min(height[i], height[j]) * (j - i));
        height[i] < height[j] ? i++ : j--;
    }
    console.log(maxArea)
}

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);