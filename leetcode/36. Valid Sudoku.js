/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let hashRow, hashMap = {},
        length = board.length;
    for (let i = 0; i < board.length; i++) {
        hashRow = [];
        for (let j = 0; j < board.length; j++) {
            if (!(i % (length / 3)) && !(j % (length / 3))) {
                hashMap[`${i}${j}`] = [];
            }

            if (!hashMap[j]) hashMap[j] = [];
            if (board[i][j] !== '.') {
                // 行判断
                if (hashRow[board[i][j]]) return false;
                else hashRow[board[i][j]] = true;

                // 列判断
                if (hashMap[j][board[i][j]]) return false;
                else hashMap[j][board[i][j]] = true;

                // 格子判断
                if (hashMap[`${i - i%3}${j - j%3}`][board[i][j]]) return false;
                else hashMap[`${i - i%3}${j - j%3}`][board[i][j]] = true;
            }
        }
    }
    
    return true;
};

let testcase = [
    [".", ".", "4", ".", ".", ".", "6", "3", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["5", ".", ".", ".", ".", ".", ".", "9", "."],
    [".", ".", ".", "5", "6", ".", ".", ".", "."],
    ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
    [".", ".", ".", "7", ".", ".", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."]
];

let r = isValidSudoku(testcase);

console.log(r);