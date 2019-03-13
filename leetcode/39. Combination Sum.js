/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// 递归
// var combinationSum = function (candidates, target) {
//     if(candidates[0] === 1 && candidates[1] === 2 && target === 1) return [[1]];
//     let res = [];
//     recurs(res, [], candidates, target, 0);
//     console.log(res);
//     return res;
// };

// let hashMap = {};

// function recurs(res, cur, candidates, target, sum) {
//     for (let i = 0; i < candidates.length; i++) {
//         let newSum = sum + candidates[i];
//         if (newSum === target) {
//             cur.push(candidates[i]);
//             let key = cur.sort((a, b) => a - b).join('');
//             if(!hashMap[key]) {
//                 res.push(cur);
//                 hashMap[key] = 1;
//             }
//         } else if (newSum < target) {
//             recurs(res, [...cur, candidates[i]], candidates, target, newSum)
//         }
//     }
// }

// 动态规划1
var combinationSum2 = function (candidates, target) {
    const sortedNums = candidates.sort((a, b) => a - b);
    let opt = [];

    for (let sum = 0; sum <= target; sum++) {
        opt[sum] = [];
        let combineList = [];

        for (let i = 0; i < sortedNums.length && sortedNums[i] <= sum; i++) {
            if (sum === sortedNums[i]) {
                combineList.push([sortedNums[i]]);
            } else {
                for (let prevList of opt[sum - sortedNums[i]]) {
                    if (sortedNums[i] >= prevList[prevList.length - 1]) {
                        combineList.push([...prevList, sortedNums[i]]);
                    }
                }
            }
        }
        opt[sum] = combineList;
    }

    console.log(opt);
    return opt[target];
};

// 动态规划2
var combinationSum = function (candidates, target) {
    let targetRes = [];
    candidates = candidates.sort((a, b) => a - b);

    for (let i = 0; i <= target; i++) {
        targetRes[i] = [];
        let res = [];
        for(let j = 0; j < candidates.length && candidates[j] <= i; j++) {
            if(i === candidates[j]) {
                res.push([i]);
            } else {
                for(let list of targetRes[i - candidates[j]]) {
                    if(candidates[j] >= list[list.length - 1]) {
                        res.push([...list, candidates[j]]);
                    }
                }
            }
        }
        targetRes[i] = res;
    }

    console.log(targetRes)
    return targetRes[target];
}

console.log(combinationSum([2,3,6,7],7));