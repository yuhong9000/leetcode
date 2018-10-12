/**
https://leetcode.com/problems/pascals-triangle/description/
118. Pascal's Triangle
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const nums = [];

    for(let i = 0; i < numRows; i++){
        nums[i] = new Array(i+1);
        nums[i][0] = 1;
        nums[i][i] = 1;
        for(let j = 1; j < i; j++){
            nums[i][j] = nums[i-1][j-1] + nums[i-1][j];
        }
    }

    return nums;
};
