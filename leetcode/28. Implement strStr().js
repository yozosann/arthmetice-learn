/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let next = getNext(needle);
    let i = 0, j = 0;
    while(j < needle.length && (haystack.length - i) >= (needle.length - j)) {
        if(haystack[i] === needle[j]) {
            i++;
            j++;
        } else if(j === 0) {
            i++;
        } else {
            j = next[j];
        }
    }

    if(j === needle.length) {
        console.log(j - i);
        return j - i;
    } else {
        return -1;
    }
};

function getNext(str) {
    let next = [];
    let j = 0;
    let k = -1;
    next[0] = -1;
    while(j < str.length) {
        if(k === -1 || str[j] === str[k]) {
            next[++j] = ++k;
        } else {
            k = next[k];
        }
    }

    return next;
}

strStr('hello', 'lle');
