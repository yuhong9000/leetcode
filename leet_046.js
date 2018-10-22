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
 const permute = function(nums) {
     const result = [];
     permuteUtil([],nums,result);
     return result;
 };

 const permuteUtil = function(left,right,result){
     if(right.length <= 1){
         return result.push(left.concat(right));
     }
     for(let i = 0; i < right.length; i++){
         permuteUtil(left.concat(right[i]),[...right.slice(0,i),...right.slice(i+1,right.length)],result);
     }
 }
