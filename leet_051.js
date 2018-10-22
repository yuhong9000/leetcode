/**
https://leetcode.com/problems/n-queens/description/
51. N-Queens
The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

Example:

Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
*/
/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function(n) {
    const result = [];
    const board = new Array(n).fill(0).map(()=>new Array(n).fill(0));
    solveNQueensUtil(board,n,0,result)
    return result;
};

// solve by column
const solveNQueensUtil = (board,n,col,result) => {
    if(col >= n){
        return result.push(boardFormat(board));
    }

    for(let i = 0; i < n; i++){
        board[i][col] = 1;
        if(checkValid(i,col,board,n)){
            solveNQueensUtil(board,n,col+1,result);
        }
        // backtrace
        board[i][col] = 0;
    }
};

const boardFormat = (board) => {
    const result = [];
    for(let i = 0; i < board.length; i++){
        let str = '';
        for(let j = 0; j < board.length; j++){
            str += board[i][j] === 1? 'Q' : '.';
        }
        result.push(str);
    }
    return result;
};

const checkValid = (row,col,board,n) => {
    for(let i = 1; i <= col; i++){
        if(board[row][col-i] === 1)
            return false;
        if(row - i >= 0 && board[row-i][col-i] === 1)
            return false;
        if(row + i < n && board[row+i][col-i] === 1)
            return false;
    }
    return true;
};
