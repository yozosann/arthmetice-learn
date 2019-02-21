/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let curLongest = '', preLongest = '';
    for(let c of s) {
        let index = curLongest.indexOf(c);
        if(!~index) {
            curLongest += c;
            preLongest = preLongest.length > curLongest.length ? preLongest : curLongest;
        }
        else {
            let substr1 = curLongest.slice(0 , index + 1);
            let substr2 = curLongest.slice(index + 1) + c;
            let longer = substr1.length > substr2.length ? substr1 : substr2;
            preLongest = longer.length > preLongest.length ? longer : preLongest;
            curLongest = substr2;
        } 
    }
    console.log(preLongest);
    return preLongest.length;
};

lengthOfLongestSubstring('nfpdmpi')
