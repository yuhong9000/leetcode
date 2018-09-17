/**
https://leetcode.com/problems/permutations/description/
46. Permutations
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const results = [];
    getPermutation([],nums,results);
    return results;
};

const getPermutation = function(left,right,results){
    if (right.length === 0) {
        results.push(left.slice());
        return;
    }

    for(let i = 0; i < right.length; i++){
        let temp = left.slice();
        temp.push(right[i]);
        getPermutation(temp,right.slice(0,i).concat(right.slice(i+1,right.length)),results);
    }
}
