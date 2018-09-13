/**
https://leetcode.com/problems/reverse-string/description/
344. Reverse String
Write a function that takes a string as input and returns the string reversed.

Example 1:

Input: "hello"
Output: "olleh"
Example 2:

Input: "A man, a plan, a canal: Panama"
Output: "amanaP :lanac a ,nalp a ,nam A"
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let result = '';
    for(let i = s.length-1; i >= 0; i--){
        result += s[i];
    }
    return result;
};
