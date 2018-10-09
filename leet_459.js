/**
https://leetcode.com/problems/repeated-substring-pattern/description/
459. Repeated Substring Pattern
Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

Example 1:

Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.
Example 2:

Input: "aba"
Output: False
Example 3:

Input: "abcabcabcabc"
Output: True
Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const n = s.length;
    const prefix = new Array(n);
    let len = 0;
    prefix[0] = 0;
    let i = 1;

    while (i < n){
        if(s[i] === s[len]){
            len++;
            prefix[i] = len;
            i++;
        }
        else{
            if(len !== 0){
                len = prefix[len-1];
            }
            else{
                prefix[i] = 0;
                i++;
            }
        }
    }
    return prefix[n-1] > 0 && (n % (n - prefix[n-1]) === 0);

};
