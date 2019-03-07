/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    if(!s.length) return 0;
    let stack = [];
    let hashMap = [];
    let maxLen = 0,
        temp = 0;
    for (let i = 0; i < s.length; i++) {
        if (!stack.length) {
            stack.push({
                val: s[i],
                i
            });
            continue;
        }
        if (stack.length && stack[stack.length - 1].val === '(' && s[i] === ')') {
            hashMap.push((stack.pop()).i);
            hashMap.push(i);
        } else {
            stack.push({
                val: s[i],
                i
            });
        }
    }
    hashMap = hashMap.sort((a, b) => a - b);
    let i = 0;
    for (; i < hashMap.length - 1; i++) {
        if (hashMap[i] + 1 === hashMap[i + 1]) {
            temp++;
        } else {
            maxLen = temp > maxLen ? temp : maxLen;
            temp = 0;
        }
    } 
    maxLen = temp > maxLen ? temp : maxLen;
    if(i === hashMap.length - 1) maxLen++;
    return maxLen;
};

longestValidParentheses("()(())");