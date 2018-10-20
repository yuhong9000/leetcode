/**
https://leetcode.com/problems/generate-parentheses/description/
22. Generate Parentheses
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

*/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    generateParenthesisHelper('',n,n,result);
    return result;
};

var generateParenthesisHelper = function(str, left, right,result) {
    if(right === 0){
        result.push(str);
        return;
    }

    if(right === left){
        generateParenthesisHelper(str.concat('('),left-1,right,result);
    }
    else if (right > left){
        if(left > 0){
            generateParenthesisHelper(str.concat('('),left-1,right,result);
        }
        generateParenthesisHelper(str.concat(')'),left,right-1,result);
    }
}
