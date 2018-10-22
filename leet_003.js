/**
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
3. Longest Substring Without Repeating Characters
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const hash = {};

    let start = 0; // starting index for substring
    let max = 0; // max substring length
    let len = 0; // current substring length

    for(let i = 0; i < s.length; i++){
        const index = s[i];

        if(!(index in hash)|| hash[index] < start){
            hash[index] = i;
            len++;
        }
        else{
            start = hash[index] + 1;
            hash[index] = i;
            len = i - start + 1;
        }
        max = Math.max(len,max);
    }

    return max;
};
