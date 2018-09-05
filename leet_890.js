/**
https://leetcode.com/problems/find-and-replace-pattern/description/
890. Find and Replace Pattern
You have a list of words and a pattern, and you want to know which words in words matches the pattern.

A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.

(Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.)

Return a list of the words in words that match the given pattern.

You may return the answer in any order.
*/
/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
const findAndReplacePattern = function(words, pattern) {
    return words.filter(word => matchPattern(word,pattern));
};

const matchPattern = (word,pattern) => {
    const map = {};
    const set = new Set();

    for(let i = 0; i < word.length; i++){
        const w = word[i];
        const p = pattern[i];

        if(map[p] && map[p] !== w){
            return false;
        }
        else if (!map[p] && set.has(w)){
            return false;
        }
        map[p] = w;
        set.add(w);
    }
    return true;
}
