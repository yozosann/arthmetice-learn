/**
 * https://blog.csdn.net/hk2291976/article/details/51165010 递归
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// 解法一：递归
var isMatch = function(s, p) {
    return myMatch(s, s.length - 1, p, p.length - 1);
};

function myMatch(s, i, p, j) {
    // console.log(s.slice(0, i+1), p.slice(0, j+1));
    if(j === -1) {
        if(i === -1) return true;
        else return false;
    }

    if(p[j] === '*') {
        if(i >= 0 && (p[j - 1] === '.' || p[j - 1] === s[i])) {
            if(myMatch(s, i - 1, p, j)) return true;
        }
        return myMatch(s, i, p, j - 2);
    }

    if(p[j] === '.' || p[j] === s[i]) {
        return myMatch(s, i - 1, p, j - 1);
    } else {
        return false;
    }
}

console.log(isMatch('a', '.*..a*'));