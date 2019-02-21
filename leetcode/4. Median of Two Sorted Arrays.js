/** Hard
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let combine = [], length = nums1.length + nums2.length;
    for(let i = 0; i < length; i++) {
        let val;
        if(nums1[0] === undefined) val = nums2[0];
        if(nums2[0] === undefined) val = nums1[0];
        if(nums1[0] !== undefined && nums2[0] !== undefined) val = nums1[0] < nums2[0] ? nums1[0] : nums2[0];
        combine[i] = val;
        val === nums1[0] ? nums1.shift() : nums2.shift();
    }
    console.log(combine);
    return length%2 === 1 ? combine[Math.floor(length/2)] : (combine[length/2] + combine[length/2 - 1])/2;
};

console.log(findMedianSortedArrays([2], []));