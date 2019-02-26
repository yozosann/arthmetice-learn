/**
 * https://blog.csdn.net/hk2291976/article/details/51165010 递归
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// 解法一：递归
// var isMatch = function (s, p) {
//     return myMatch(s, s.length - 1, p, p.length - 1);
// };

// function myMatch(s, i, p, j) {
//     // console.log(s.slice(0, i+1), p.slice(0, j+1));
//     if (j === -1) {
//         if (i === -1) return true;
//         else return false;
//     }

//     if (p[j] === '*') {
//         if (i >= 0 && (p[j - 1] === '.' || p[j - 1] === s[i])) {
//             if (myMatch(s, i - 1, p, j)) return true;
//         }
//         return myMatch(s, i, p, j - 2);
//     }

//     if (p[j] === '.' || p[j] === s[i]) {
//         return myMatch(s, i - 1, p, j - 1);
//     } else {
//         return false;
//     }
// }


// 解法二：动态规划
var isMatch = function (s, p) {
    let dp = Array.from({ length: s.length + 1 }).map(_ => {
        return Array.from({ length: p.length + 1 }).map(_ => false);
    });
    dp[0][0] = true;
    for (let i = 1; i <= s.length; i++) dp[i][0] = false;
    for (let j = 1; j <= p.length; j++) {
        dp[0][j] = j > 1 && '*' === p[j - 1] && dp[0][j - 2];
    }


    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            // 因为p[0][0]代表空字符串，所以在模式中取的时候 都需要减1计算
            if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 2] ||  (s[i-1] === p[j-2] || p[j-2] === '.') && dp[i-1][j];
            } else {
                dp[i][j] = (p[j - 1] === '.' || p[j - 1] === s[i - 1]) && dp[i - 1][j - 1];
            }
        }
    }

    return dp[s.length][p.length];
};


console.log(isMatch('aab', 'c*a*b'));