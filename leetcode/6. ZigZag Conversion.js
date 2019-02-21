/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let column = 0, validSeat = 0, length = s.length, results = Array.from({length:numRows}).map(_ => '');
    while(validSeat < length) {
        // seats[column] = [];
        if(!(column % (numRows - 1))) {
            for(let i = 0; i < numRows; i ++) {
                // seats[column][i] = s[validSeat];
                results[i] += s[validSeat];
                if(++validSeat >= length) break;
            }
        } else {
            let row = numRows - 1 - (column % (numRows - 1));
            // seats[column][row] = s[validSeat];
            results[row] += s[validSeat];
            validSeat ++;
        }
        column ++;
    }

    console.log(results.join(''));
    return results.join('');
};

convert('PAYPALISHIRING', 3);
