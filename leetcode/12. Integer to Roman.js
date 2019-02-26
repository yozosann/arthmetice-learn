/**
 * @param {number} num
 * @return {string}
 */
// var intToRoman = function(num) {
//     let result = '';
//     let range = [1, 5, 10, 50, 100, 500, 1000];
//     let symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
//     while(num > 0) {
//         for(let i = range.length - 1; i >= 0; i --) {
//             if(num >= range[i]) {
//                 let repeats;
//                 if(String(range[i])[0] === '5' &&  Math.floor(num/range[i - 1]) === 9) {
//                     result = result + symbols[i - 1] + symbols[i+1];
//                     num = num - Math.floor(num/range[i - 1]) * range[i - 1];
//                 } else {
//                     repeats = Math.floor(num/range[i]);
//                     result = result + (repeats === 4 ? symbols[i] + symbols[i+1] : 
//                         symbols[i].repeat(repeats));
//                     num = num - repeats * range[i];
//                 }    
//                 range = range.slice(0, i + 1);
//             }
//         }
//     }
//     console.log(result);
//     return result;
// };

var intToRoman = function (num) {
    let result = '';
    let range = [1, 5, 10, 50, 100, 500, 1000];
    let symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

    for (let i = range.length - 1; i >= 0; i--) {
        if (range[i] > num) continue;
        let repeats;
        if (String(range[i])[0] === '5' && Math.floor(num / range[i - 1]) === 9) {
            result = result + symbols[i - 1] + symbols[i + 1];
            num = num - Math.floor(num / range[i - 1]) * range[i - 1];
        } else {
            repeats = Math.floor(num / range[i]);
            result = result + (repeats === 4 ? symbols[i] + symbols[i + 1] :
                symbols[i].repeat(repeats));
            num = num - repeats * range[i];
        }
    }

    console.log(result);
    return result;
}

intToRoman(1994);