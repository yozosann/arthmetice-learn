/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    let res = [];
    if (s.length == 0 || words.length == 0) return res;
    let arrLen = words.length;
    let wordLen = words[0].length;
    let m1 = {};
    for(let word of words) {
        m1[word] ? m1[word] ++ : (m1[word] = 1);
    }

    for(let i = 0; i <= s.length - arrLen * wordLen; i++) {
        let m2 = {};
        let j;
        for(j = 0; j < arrLen; j++) {
            let word = s.substr(i + j * wordLen, wordLen);
            if(!m1[word]) break;
            m2[word] ? m2[word] ++ : (m2[word] = 1);
            if(m2[word] > m1[word]) break;
        }
        console.log(i, m2);
        if(j === arrLen) res.push(i);
    }

    console.log(res);
    return res;
};
