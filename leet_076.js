/**
76. Minimum Window Substring
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

*/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let left = 0;
    let right = 0;
    let total = 0;
    let min = s.length;
    let result = '';
    const map = new Map();

    for(let i = 0; i < t.length; i++){
        if(map.has(t[i])){
            map.set(t[i],map.get(t[i])+1);
        }
        else{
            map.set(t[i],1);
        }
        total++;
    }
    while(right < s.length){
        if(total === 0){
            if(right-left+1 <= min){
                min = right-left+1;
                result = s.slice(left,right+1);
            }
            if(map.has(s[left])){
                map.set(s[left],map.get(s[left])+1);
                if(map.get(s[left]) > 0){
                    total++;
                    right++;
                }
            }
            left++;
        }
        else{
            if(map.has(s[right])){
                map.set(s[right],map.get(s[right])-1);
                if(map.get(s[right]) >= 0)
                    total--;
            }
            if(total > 0)
                right++;
        }
    }
    return result;
};
