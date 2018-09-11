/**
https://leetcode.com/problems/two-sum/description/
1. Two Sum
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let index_one = 0; index_one < nums.length-1; index_one++){
        for(let index_two = index_one+1; index_two < nums.length; index_two++){
            if(nums[index_one] + nums[index_two] === target){
                return [index_one,index_two];
            }
        }
    }
};
