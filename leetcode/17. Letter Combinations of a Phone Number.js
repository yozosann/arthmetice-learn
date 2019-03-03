/**
 * @param {string} digits
 * @return {string[]}
 */
let results = [];
let digitsArr = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

var letterCombinations = function(digits) {
    if(!digits) return '';
    getRes('', 0, digits);

    console.log(results);
    return results;
};

function getRes(cur, index, digits) {
    // console.log(results, cur, index, digits, digits.length);
    if(index === digits.length) {
        return results.push(cur);
    }

    let str = digits[index];
    for(let i = 0; i < digitsArr[str].length; i++) {
        getRes(cur + digitsArr[str][i], index + 1, digits);
    }
}

letterCombinations('233');