/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 // 全排序
var nextPermutation = function (nums) {
    if (nums.length <= 1) return nums;
    let i = nums.length - 1;
    for (; nums[i] <= nums[i - 1] && i > 0; i--) { }

    if (!i) return nums.reverse();
    swap(i, i - 1, nums);
    while (i < nums.length - 1) {
        if (nums[i] > nums[i + 1]) {
            swap(i, i + 1, nums);
            i++;
        }
    }
    return nums;
};

function swap(i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

nextPermutation([1,2,3,42,32,12,3]);

// var nextPermutation2 = function (nums) {
//     var len = nums.length;

//     var flag = false;

//     var pos, changePos;

//     for (var i = len - 2; i >= 0; i--) {
//         if (nums[i] < nums[i + 1]) {
//             flag = true;
//             pos = i;
//             break;
//         }
//     }

//     if (!flag) {
//         nums.sort(function (a, b) {
//             return a - b;
//         });
//     } else {
//         for (var i = len - 1; ; i--)
//             if (nums[i] > nums[pos]) {
//                 var tmp = nums[i];
//                 nums[i] = nums[pos];
//                 nums[pos] = tmp;
//                 break;
//             }

//         var tmp = nums.slice(pos + 1).sort(function (a, b) {
//             return a - b;
//         });

//         nums.length = pos + 1;

//         Array.prototype.push.apply(nums, tmp);
//     }

// };