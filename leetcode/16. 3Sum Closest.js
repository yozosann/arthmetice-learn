/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b) => a -b);
    let closest = 0, offset = Infinity, length = nums.length;
    for(let i = 0; i < length - 1; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        let l = i + 1, r = length - 1;
        while(l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if(sum === target) {
                return sum;
            } else {
                if(Math.abs(sum - target) < offset) {
                    offset = Math.abs(sum - target);
                    closest = sum;
                }

                sum > target ? r-- : l++;
            }
        }
    }
    return closest;
};

threeSumClosest([1,1,1,1], 0);