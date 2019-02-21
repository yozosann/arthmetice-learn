/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    s = `#${s.split('').join('#')}#`;
    let RL = [], MaxRight = 0, pos = 0, maxRL = 0, maxIndex = 0;
    for(let i = 0; i < s.length; i++) {
        RL[i] = i < MaxRight ? Math.min(RL[pos - (i - pos)], MaxRight - i) : 1;
        while(i - RL[i] >= 0 && i + RL[i] < s.length && s[i - RL[i]] === s[i + RL[i]]) {
            RL[i] ++;
        }
        if(RL[i] + i - 1 > MaxRight) {
            MaxRight = RL[i] + i - 1;
            pos = i;
        }

        if(RL[i] > maxRL) {
            maxRL = RL[i];
            maxIndex = i;
        }
    }

    // console.log(s.slice(maxIndex - (maxRL - 1), maxIndex + maxRL));
    // console.log(RL);
    return (s.slice(maxIndex - (maxRL - 1), maxIndex + maxRL)).replace(/#/g, '');
};

console.log(longestPalindrome('cbbd'));