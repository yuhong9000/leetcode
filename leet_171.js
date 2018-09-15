/**
https://leetcode.com/problems/excel-sheet-column-number/description/
171. Excel Sheet Column Number
Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    ...
Example 1:

Input: "A"
Output: 1
Example 2:

Input: "AB"
Output: 28
Example 3:

Input: "ZY"
Output: 701
*/
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let n = 0;
    let result = 0;
    const dict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(let i = s.length-1; i >= 0; i--){
        result += Math.pow(26,n) * (dict.indexOf(s[i]) + 1);
        n++;
    }

    return result;
};
