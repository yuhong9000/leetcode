/**
https://leetcode.com/problems/valid-anagram/description/
242. Valid Anagram
DescriptionHintsSubmissionsDiscussSolution
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const smap = {};

    for(let i = 0; i < s.length; i++){
        smap[s[i]] = s[i] in smap? smap[s[i]]+1 : 1;
    }

    for(let i = 0; i < t.length; i++){
        if(t[i] in smap){
            if(--smap[t[i]] === 0)
                delete smap[t[i]];
        }else{
            return false;
        }
    }

    return Object.keys(smap).length === 0;
};
