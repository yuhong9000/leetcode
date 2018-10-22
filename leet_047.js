/**
https://leetcode.com/problems/permutations-ii/description/
47. Permutations II
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function(nums) {
    const result = [];
    permuteUniqueHelper([],nums,result);
    return result;
}

const permuteUniqueHelper = function(left, right, result) {
    if(right.length <= 1){
        return result.push(left.concat(right));
    }

    const repeated = new Set();
    for(let i = 0; i < right.length; i++){
        if(!repeated.has(right[i])){
            repeated.add(right[i]);
            permuteUniqueHelper(left.concat(right[i]),[...right.slice(0,i),...right.slice(i+1,right.length)],result);
        }
    }
};
