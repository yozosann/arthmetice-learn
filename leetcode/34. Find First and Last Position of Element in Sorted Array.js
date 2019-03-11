/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let low = 0,
        high = nums.length - 1,
        left = -1,
        right = -1,
        flag = false;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) {
            if(right === -1) {
                right = mid;

                // 右边界判断条件
                if(mid === nums.length - 1 || nums[mid + 1] > target) flag = true;
            }

            // 左边界判断条件
            if (mid === 0 || nums[mid - 1] < target) {
                left = mid;
                break;
            } else high = mid - 1;
        }
        if (nums[mid] < target) {
            low = mid + 1;
        } else if (nums[mid] > target) {
            high = mid - 1;
        }
    }

    // 找到了right 自然有left 直接返回结果
    if (right !== -1 && flag) return [left, right];

    // right === -1 啥都没有找到
    if (right === -1) return [left, right];

    // 剩下最后一种情况，找到left 但是没有找到最右的right，再一轮二分法
    low = right, high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) {
            if (mid === nums.length - 1 || nums[mid + 1] > target) {
                right = mid;
                break;
            } else low = mid + 1;
        }
        if (nums[mid] < target) {
            low = mid + 1;
        } else if (nums[mid] > target) {
            high = mid - 1;
        }
    }
    return [left, right];
};

console.log(searchRange([2,2,2,2,2, 2], 2));