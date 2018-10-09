/**
https://leetcode.com/problems/word-pattern/description/
290. Word Pattern
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true
Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", str = "dog dog dog dog"
Output: false
*/
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const map = {};
    const set = new Set();
    const arr = str.split(' ');

    if(pattern.length !== arr.length)
        return false;

    for(let i = 0; i < pattern.length; i++){
        if(pattern[i] in map){
            if(map[pattern[i]] !== arr[i]){
                return false;
            }
        }
        else{
            if(set.has(arr[i]))
                return false;
            else{
                map[pattern[i]] = arr[i];
                set.add(arr[i]);
            }
        }
    }

    return true;
};
