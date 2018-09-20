/**
https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/description/
395. Longest Substring with At Least K Repeating Characters
Find the length of the longest substring T of a given string (consists of lowercase letters only) such that every character in T appears no less than k times.

Example 1:

Input:
s = "aaabb", k = 3

Output:
3

The longest substring is "aaa", as 'a' is repeated 3 times.
Example 2:

Input:
s = "ababbc", k = 2

Output:
5

The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
*/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    let queue = [s];
    let max = 0;

    while(queue.length > 0){
        let str = queue.shift();
        let map = {};
        for(let i = 0; i < str.length; i++){
            if(map[str[i]]){
                map[str[i]]++;
            }else{
                map[str[i]] = 1;
            }
        }

        let set = new Set();
        Object.keys(map).forEach((item) => {
            if(map[item] < k)
                set.add(item);
        });

        console.log(set);
        if(set.size === 0){
            max = Math.max(max,str.length)
        }else{
            let pre = 0;
            for(let i = 0; i <= str.length; i++){
                if(set.has(str[i]) || i === str.length){
                    if(i > pre)
                        queue.push(str.slice(pre,i));
                    pre = i + 1;
                }
            }
        }
    }
    return max;
};
