/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 // 字典序算法
 // https://www.cnblogs.com/liushaobo/p/4380559.html
 // https://www.cnblogs.com/darklights/p/5285598.html

var nextPermutation = function (nums) {
    if (nums.length <= 1) return nums;
    let i = nums.length - 1;
    for (; nums[i] <= nums[i - 1] && i > 0; i--) { }

    if (!i) return nums.reverse();

    let j = nums.length - 1;
    for (; j >= i; j--) { 
        if(nums[j] > nums[i - 1]) break;
    }

    swap(j, i - 1, nums);
    for(;i < nums.length - 1; i++) {
        for(j = nums.length - 1; j > i; j--) {
            swap(j, j - 1, nums);
        } 
    }
    return nums;
};

function swap(i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(nextPermutation([1,2,3,42,32,12,3]));
