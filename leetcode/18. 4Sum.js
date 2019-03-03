/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums = nums.sort((a,b) => a - b);
    console.log(nums);
    let results = [], length = nums.length;
    for(let i = 0; i < length - 3; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        let newTarget = target - nums[i];
        for(let j = i + 1; j < length - 2; j++) {
            if(j > i + 1 && nums[j] === nums[j - 1]) continue;
            let l = j + 1, r = length - 1;
            while(l < r) {
                let sum = nums[j] + nums[l] + nums[r];
                if(sum === newTarget) {
                    results.push([nums[i], nums[j], nums[l], nums[r]])
                    while(nums[r] === nums[r-1]) {
                        r--;
                    }
    
                    while(nums[l] === nums[l+1]) {
                        l++;
                    }
                    r--;
                    l++;
                } else if(sum > newTarget) {
                    r--;
                } else if(sum < newTarget) {
                    l++;
                }
            }
        }
    }

    console.log(results);
    return results;
};

fourSum([0,2,-10,-4,1,-7,-4,9,1,-3,-4,-6,-7,-6,-2,7,-5,2], -29);


// [[-5,-4,-3,1]]
