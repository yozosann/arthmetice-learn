/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    dfs(board,0);
    console.log(board);
    return board;
};

function dfs(board, d) {
    if (d === 81) return true;
    let i = Math.floor(d / 9),
        j = d % 9;
    if (board[i][j] != '.') return dfs(board, d + 1); //prefill number skip

    let flag = Array(10);
    validate(board, i, j, flag);
    for (let k = 1; k <= 9; k++) {
        if (flag[k]) {
            board[i][j] = String(k);
            if (dfs(board, d + 1)) return true;
        }
    }
    board[i][j] = '.'; //if can not solve, in the wrong path, change back to '.' and out
    return false;
}

function validate(board, i, j, flag) {
    flag.fill(true);
    for (let k = 0; k < 9; k++) {
        if (board[i][k] !== '.') flag[board[i][k]] = false;
        if (board[k][j] !== '.') flag[board[k][j]] = false;
        let r = Math.floor(i / 3) * 3 +  Math.floor(k / 3);
        let c =  Math.floor(j / 3) * 3 + k % 3;
        if (board[r][c] !== '.') flag[board[r][c]] = false;
    }
}

solveSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]);