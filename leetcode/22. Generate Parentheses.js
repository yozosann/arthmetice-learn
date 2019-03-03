/**
 * @param {number} n
 * @return {string[]}
 * 其实就是递归穷举出所有的有效的括号对。
 * 怎么才能穷举出有效的括号对？
 * 所有左括号数量大于等于右括号数量的组合。以3为例子：
 * ((( 、(() 、() 一直按这个规则递归下去所有括号就能得到所有有效解。
 */
var generateParenthesis = function (n) {
    let res = [];
    genCombinations('', n, n, res);

    console.log(res.length);
    return res;
};

function genCombinations(str, left ,right, res) {
    console.log(str)
    if(left === 0 && right === 0) {
        res.push(str);
    }
    if(left > 0) {
        genCombinations(str + '(', left - 1, right, res);
    }
    if(right > 0 && left < right) {
        genCombinations(str + ')', left, right - 1, res);
    }
}

generateParenthesis(3);
