/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if(p.length < s.length) return false;
    let i, j = 0;
    while(i < s.length) {
        if(s[i] === p[i] && !isS(p[i]) && !isP[i] && !i) j++;

        if(s[i] === p[i] || isS(p[i]) || isP[i])
    }
};

function isS (s) {
    return s === '.';
}

function isP (s) {
    return s === '*';
}