/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

};

function getNext(str) {
    let next = [];
    let j = 0;
    let k = -1;
    next[0] = -1;
    while(j < str.length) {
        console.log(k);
        if(k === -1 || str[j] === str[k]) {
            next[++j] = ++k;
        } else {
            k = next[k];
        }
    }

    console.log(next);
    return next;
}

getNext('abcabcababc');
