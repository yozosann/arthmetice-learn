/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b) => a -b);
    let results = [], length = nums.length;
    for(let i = 0; i < length - 1; i++) {
        if(nums[i] > target) break;
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        let l = i + 1, r = length - 1;
        while(l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if(sum === target) {
                results.push([nums[i], nums[l], nums[r]]);
                while(nums[r] === nums[r-1]) {
                    r--;
                }

                while(nums[l] === nums[l+1]) {
                    l++;
                }
                r--;
                l++;
            } else if(sum > 0) {
                r--;
            } else if(sum < 0) {
                l++;
            }
        }
    }
    return results;
};

threeSum([-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]);