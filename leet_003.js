/**
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
3. Longest Substring Without Repeating Characters
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let pre = 0;
    let len = 0;
    const map = {};
    for(let i = 0; i < s.length; i++){
        if(s[i] in map){
            max = Math.max(max,len);
            len = len - (map[s[i]] - pre);
            for(let j = pre; j < map[s[i]]; j++){
                delete map[s[j]];
            }
            pre = map[s[i]] + 1;
            map[s[i]] = i;
        }else{
            len++;
            map[s[i]] = i;
        }
    }
    return Math.max(max,len);
};
